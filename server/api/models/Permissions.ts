'use strict';
import { Document, Schema, Model, model } from "mongoose";

export let schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  account: { type: Schema.Types.ObjectId, ref: 'Account', required: true, index: true },
});

let Permissions: Model<any> = model<any>('Permissions', schema)
export default Permissions