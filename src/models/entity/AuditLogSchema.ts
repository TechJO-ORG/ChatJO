import {Schema} from "mongoose";

export const AuditLogSchema = new Schema(
    {
        createdAt: { type: Date, required: true },
        lastSeen: { type: String, required: true }
    },
    { _id: false }
);