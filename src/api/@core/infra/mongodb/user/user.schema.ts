import { UUID } from 'mongodb';
import { Schema, model } from 'mongoose';

export interface IUserSchema {
    user_id: UUID;
    email:string;
    name:string;
    surname:string;
    oab:string;
}


export const UserSchema = new Schema<IUserSchema>({
    user_id: { type: UUID, required: true },
	name: { type: String, required: true },
    surname: { type: String, required: true },
	email: { type: String, required: true },
    oab: { type: String, required: true },

});

export interface UserDocument extends IUserSchema, Document {}

export class UserModel {
	static create() {
		return model<UserDocument>('User', UserSchema);
	}
}
