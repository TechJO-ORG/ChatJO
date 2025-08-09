import mongoose, { Schema, Document,Types } from "mongoose";
import {IUser} from "../interfaces/IUser";
import {AuditLogSchema} from "./AuditLogSchema";

export interface IUserDocument extends Document<Types.ObjectId>, IUser {}

const UserSchema = new Schema<IUserDocument>(
    {
        auditLog: { type: [AuditLogSchema], required: true, default: [] },
        email: { type: String, required: true },
        groups: { type: [String], required: true, default: [] },
        hasToken: { type: Boolean, required: true, default: false },
        password: { type: String, required: true },
        phone: { type: String, required: true },
        profilePic: { type: String, required: true },
        status: { type: String, required: true },
        Token: { type: Schema.Types.Mixed, default: null },
        username: { type: String, required: true }
    },
    { timestamps: true }
);

export const UserModel = mongoose.model<IUserDocument>("User", UserSchema);