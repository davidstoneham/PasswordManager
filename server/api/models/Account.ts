'use strict';
import { Document, Schema, Model, model } from "mongoose";

export let schema = new Schema({
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  login: { type: String, required: true },
  password: { type: String, required: true, select: false },
  salt: { type: String, required: true, select: false },
  description: { type: String },
});

let Account: Model<any> = model<any>('Account', schema)
export default Account