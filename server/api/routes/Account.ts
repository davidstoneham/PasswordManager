"use strict";
import Permissions from '../models/Permissions'
import middleware from '../middleware';
import errorHandler from '../services/errorHandler';
import Account from '../models/Account';
import * as crypto from 'crypto';

export async function create(req, res) {
    try {
        const data = req.body;
        let promises = [];

        // check for data
        if (!data)
            throw { status: 400, message: "Invalid information. Please ensure you have submitted all required fields" }

        // encrypt password
        const key = getKey(data.login);
        let encrypted = encrypt(data.password, key);
        // create account
        let newItem = new Account();
        newItem.createdBy = req.payload._id;
        newItem.name = data.name;
        newItem.login = data.login;
        newItem.password = encrypted.encryptedData;
        newItem.salt = encrypted.iv;
        newItem.description = data.description || undefined;
        promises.push(newItem.save());
        // add permissions
        let returnPermissions = [];
        data.access.forEach(perm => {
            let permission = new Permissions()
            permission.user = perm;
            permission.account = newItem._id;
            returnPermissions.push(permission)
            promises.push(permission.save());
        });
        // save
        await Promise.all(promises)
        // assemble return object
        let returnData = JSON.parse(JSON.stringify(newItem))
        delete returnData.password;
        delete returnData.salt;
        returnData.permissions = returnPermissions;
        // return
        res.json(returnData)
    } catch (ex) {
        errorHandler(res)(ex);
    }
}

export async function update(req, res) {
    try {
        const data = req.body;
        let promises = [];

        let account = await Account.findById(data._id).select("+password +salt");
        if (!account) throw { status: 404, message: "Account not found" }

        // update password
        if (data.password) {
            const key = getKey(data.login);
            let encrypted = encrypt(data.password, key);
            account.password = encrypted.encryptedData;
            account.salt = encrypted.iv;
        }
        // update account
        account.name = data.name;
        account.login = data.login;
        account.description = data.description || undefined;
        promises.push(account.save());
        // get permissions
        let currentPermissions = await Permissions.find({ account: data._id });
        let returnPermissions = [];
        // remove permissions
        currentPermissions.forEach(perm => {
            let index = data.access.indexOf(perm.user.toString())
            if (index === -1) promises.push(Permissions.findByIdAndRemove(perm._id))
            else {
                data.access.splice(index, 1);
                returnPermissions.push(perm);
            }
        });
        // add permissions
        data.access.forEach(perm => {
            let permission = new Permissions()
            permission.user = perm;
            permission.account = account._id;
            promises.push(permission.save());
            returnPermissions.push(permission);
        });
        // save
        await Promise.all(promises)
        // assemble return object
        let returnData = JSON.parse(JSON.stringify(account))
        delete returnData.password;
        delete returnData.salt;
        returnData.permissions = returnPermissions;
        // return
        res.json(returnData)
    } catch (ex) {
        errorHandler(res)(ex);
    }
}

export async function getPassword(req, res) {
    try {
        let account = await Account.findById(req.params.id).select("+password +salt");
        if (!account) throw { status: 404, message: "Account not found" }

        // check user has permission for this password
        if (!account.createdBy.equals(req.payload._id)) {
            let permission = await Permissions.findOne({ user: req.payload._id, account: req.params.id })
            if (!permission) throw { status: 401, message: "You do not have permission to perform this action on this account" }
        }

        const key = getKey(account.login);
        let password = decrypt(account.password, key, account.salt);

        res.json({ password })
    } catch (ex) {
        errorHandler(res)(ex);
    }
}

export async function listAccounts(req, res) {
    try {
        let permissions = await Permissions.find({ user: req.payload._id }).populate('account')
        let accounts = [];
        let promises = [];
        let getAccountPermissions = async (index) => {
            let account = accounts[index];
            let permission = await Permissions.find({ account: account._id });
            account.permissions = permission;
        }
        permissions.forEach((perm, i) => {
            accounts.push(JSON.parse(JSON.stringify(perm.account)));
            promises.push(getAccountPermissions(i))
        });

        await Promise.all(promises);
        res.json(accounts)
    } catch (ex) {
        errorHandler(res)(ex);
    }
}

function getKey(login) {
    return crypto.createHash('sha256').update(process.env.MASTER_KEY + login).digest('hex').substring(0, 32)
}


function encrypt(text, key) {
    const iv = crypto.randomBytes(16);
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

function decrypt(encrypted, key, iv) {
    let bufIv = Buffer.from(iv, 'hex');
    let encryptedText = Buffer.from(encrypted, 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), bufIv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}


// routes
export const routes = [
    {
        path: "create",
        method: "post",
        fn: create,
        middleware: [middleware.isAuthenticated]
    },
    {
        path: "update",
        method: "put",
        fn: update,
        middleware: [middleware.isAuthenticated]
    },
    {
        path: "getPassword/:id",
        method: "get",
        fn: getPassword,
        middleware: [middleware.isAuthenticated]
    },
    {
        path: "me",
        method: "get",
        fn: listAccounts,
        middleware: [middleware.isAuthenticated]
    },
]