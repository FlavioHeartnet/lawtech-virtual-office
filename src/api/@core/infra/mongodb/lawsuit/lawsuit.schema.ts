import { Schema, model } from 'mongoose';

export interface ILawsuitSchema {
	cnj: string;
	email: string;
	clients: ClientProps[];
	defendants: ClientProps[];
	phone: string;
	job_title: string;
	nacionality: string;
	marital_status: string;
}

export type ClientProps = {
	type: number;
	document_number: string;
};

export const lawsuitSchema = new Schema<ILawsuitSchema>({
	cnj: { type: String, required: true },
	email: { type: String, required: true },
	clients: Array,
	phone: { type: String, required: true },
	defendants: Array,
	job_title: { type: String, required: true },
	nacionality: { type: String, required: true },
	marital_status: { type: String, required: true }
});

export interface LawsuitDocument extends ILawsuitSchema, Document {}

export class LawsuitModel {
	static create() {
		return model<LawsuitDocument>('lawsuit', lawsuitSchema);
	}
}
