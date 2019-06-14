'use strict';
import { Document, Schema, Model, model } from "mongoose";
import * as jwt from 'jsonwebtoken';

export let schema = new Schema({
  username: { type: String, lowercase: true, trim: true, unique: true },
  password: { type: String, select: false },
  passwordToken: { type: String, select: false },
  permissions: [{ type: String }],
});

schema.methods.generateJwt = function () {
  // expire in 30 days
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 30);
  // create token
  const sigPayload = {
    _id: this._id,
    username: this.username,
    exp: Math.floor(expiry.getTime() / 1000),
    permissions: this.permissions
  };

  return jwt.sign(sigPayload, process.env.JWT_SECRET || "SETSECRET");
};


let User: Model<any> = model<any>("User", schema);
export default User
