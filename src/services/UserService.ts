import { Types } from "mongoose";
import {IUser} from "../models/interfaces/IUser";
import {IUserDocument, UserModel} from "../models/entity/UserEntity";

export class UserService {
    async create(user: IUser): Promise<IUserDocument> {
        const created = new UserModel(user);
        return created.save();
    }

    async findAll(): Promise<IUserDocument[]> {
        return UserModel.find().exec();
    }

    async findById(id: string | Types.ObjectId): Promise<IUserDocument | null> {
        if (!Types.ObjectId.isValid(String(id))) return null;
        return UserModel.findById(id).exec();
    }

    async update(id: string, update: Partial<IUser>): Promise<IUserDocument | null> {
        if (!Types.ObjectId.isValid(id)) return null;
        return UserModel.findByIdAndUpdate(id, update, { new: true }).exec();
    }

    async delete(id: string): Promise<IUserDocument | null> {
        if (!Types.ObjectId.isValid(id)) return null;
        return UserModel.findByIdAndDelete(id).exec();
    }
}
