import { Types } from "mongoose";
import {IAuditLogItem} from "./IAuditLogItem";

export interface IUser {
    _id?: Types.ObjectId;
    auditLog: IAuditLogItem[];
    email: string;
    groups: string[];
    hasToken: boolean;
    password: string;
    phone: string;
    profilePic: string;
    status: string;
    Token: string | null;
    username: string;
}
