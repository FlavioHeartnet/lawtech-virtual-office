import { Schema, model } from 'mongoose';

export interface IUserSchema {
	email: string;
	name: string;
	surname: string;
	oab: string;
	role: string;
}

export const UserSchema = new Schema<IUserSchema>({
	name: { type: String, required: true },
	surname: { type: String, required: true },
	email: { type: String, required: true },
	oab: { type: String, required: true },
	role: { type: String, required: true }
});

export interface UserDocument extends IUserSchema, Document {}

export class UserModel {
	static create() {
		return model<UserDocument>('User', UserSchema);
	}
}
