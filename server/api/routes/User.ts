"use strict";
import User from '../models/User'
import * as easyPass from '@tanepiper/easypass-2';
import middleware from '../middleware';
import errorHandler from '../services/errorHandler';
import * as bCryptAsync from '../services/bCryptAsync';
import rateLimiter from '../services/RateLimiter';

export async function login(req, res) {
    try {
        // check fields
        if (!req.body.username || !req.body.password) throw { status: 400, message: "Missing data" }
        // get user
        const username = req.body.username.toLowerCase().trim();
        let user = await User.findOne({ username: username }).select('+password');
        if (!user) throw { status: 403, message: "Incorrect username or password" };
        // check password
        if (!await bCryptAsync.compare(req.body.password, user.password))
            throw { status: 403, message: `Incorrect username or password.` };

        // return token
        res.json({ token: user.generateJwt() })
    } catch (ex) {
        errorHandler(res)(ex);
    }
}

export async function create(req, res) {
    try {
        const data = req.body;

        // check for data
        if (!data)
            throw { status: 400, message: "Invalid account information. Please ensure you have submitted all required fields" }

        // check all fields
        if (!data.username || !data.password)
            throw { status: 400, message: "Invalid account information. Please ensure you have submitted all required fields" }

        // check password length
        if (data.password.length < 8)
            throw { status: 400, message: "Your password must be at least 8 characters" }

        // check username
        let username = await isUsernameAvailable(data.username)

        // create account
        let newItem = new User();
        newItem.password = await bCryptAsync.hash(data.password);
        newItem.username = username;
        await newItem.save();

        res.json({ token: newItem.generateJwt() })
    } catch (ex) {
        errorHandler(res)(ex);
    }
}

export async function current(req, res) {
    try {
        let user = await User.findById(req.payload._id);
        if (!user) throw { status: 401, message: "Unable to find account." };
        res.json(user)
    } catch (ex) {
        errorHandler(res)(ex)
    }
}

export async function changePassword(req, res) {
    try {
        const password = req.body.password;
        const newPassword = req.body.newPassword;

        if (newPassword.length < 8)
            throw { status: 400, message: "Your password must be at least 8 characters" }

        const user = await User.findById(req.payload._id).select('+password');

        if (!user) throw { status: 401, message: "Unable to find account." };
        // check password
        if (!await bCryptAsync.compare(password, user.password)) throw { status: 403, message: `Incorrect username or password.` };

        user.password = await bCryptAsync.hash(newPassword);
        user.passwordToken = undefined;
        await user.save();
        res.json({ message: "Password changed successfully" });
    }
    catch (ex) {
        errorHandler(res)(ex)
    }
}

export async function resetPassword(req, res) {
    try {
        const password = req.body.password;
        const token = req.body.token;

        if (password.length < 8)
            throw { status: 400, message: "Your password must be at least 8 characters" }

        let user = await User.findOne({ passwordToken: token });
        if (!user) throw { status: 400, message: "Password token invalid" }
        user.password = await bCryptAsync.hash(password)
        user.passwordToken = undefined;
        await user.save();
        res.json({ message: "Password reset successfully" });
    } catch (ex) {
        errorHandler(res)(ex)
    }
}

export async function requestReset(req, res) {
    try {
        const username = req.params.username.toLowerCase().trim();
        let token = ''
        let user = await User.findOne({ username: username });
        if (!user) throw { status: 404, message: "Unable to find account." };
        token = easyPass.generate(12);
        user.passwordToken = token;
        await user.save();
        res.json({ token: token })
    } catch (ex) {
        errorHandler(res)(ex)
    }

}

export async function all(req, res) {
    try {
        let users = await User.find().select('username');
        res.json(users)
    } catch (ex) {
        errorHandler(res)(ex);
    }
}


async function isUsernameAvailable(username) {
    // sanity check
    if (!username) throw { status: 400, message: "You must enter a username" }
    if (username.length < 5) throw { status: 400, message: "Usernames cannot be shorter than 5 characters" }
    if (username.length > 20) throw { status: 400, message: "Usernames cannot be longer than 20 characters" }
    if (!username.match(/^[a-z0-9]+$/i)) throw { status: 400, message: "Usernames can only contain alphanumeric characters" }
    // check duplicates
    const match = await User.count({ username: username.toLowerCase().trim() });
    if (match > 0) throw { status: 400, message: "This username is not available" }
    // return sanitised
    return username;
}

// routes
export const routes = [
    {
        path: "login",
        method: "post",
        fn: login,
        middleware: [rateLimiter]
    },
    {
        path: "create",
        method: "post",
        fn: create,
        middleware: [rateLimiter]
    },
    {
        path: "requestReset/:email",
        method: "get",
        fn: requestReset,
        middleware: [rateLimiter]
    },
    {
        path: "resetPassword",
        method: "post",
        fn: resetPassword,
        middleware: [rateLimiter]
    },
    {
        path: "current",
        method: "get",
        fn: current,
        middleware: [middleware.isAuthenticated]
    },
    {
        path: "changePassword",
        method: "put",
        fn: changePassword,
        middleware: [middleware.isAuthenticated]
    },
    {
        path: "all",
        method: "get",
        fn: all,
        middleware: [middleware.isAuthenticated]
    }

]