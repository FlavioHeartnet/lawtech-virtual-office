import { UUID } from 'mongodb';
import { Schema, model } from 'mongoose';

export interface IDefendantSchema {
	defendant_id: UUID;
	name: string;
	email: string;
	legal_documents: legalDocumentProps[];
	phone: string;
	addresses: Address[];
	job_title: string;
	nacionality: string;
	marital_status: string;
}

export type legalDocumentProps = {
	type: number;
	document_number: string;
};

export type Address = {
	address_number: number;
	street: string;
	number: string;
	complement: string;
	city: string;
	state: string;
	zip_code: string;
	description: string;
	country: string;
};

export const defendantSchema = new Schema<IDefendantSchema>({
	defendant_id: { type: UUID, required: true },
	name: { type: String, required: true },
	email: { type: String, required: true },
	legal_documents: Array,
	phone: { type: String, required: true },
	addresses: Array,
	job_title: { type: String, required: true },
	nacionality: { type: String, required: true },
	marital_status: { type: String, required: true }
});

export interface DefendantDocument extends IDefendantSchema, Document {}

export class DefendantModel {
	static create() {
		return model<DefendantDocument>('defendant', defendantSchema);
	}
}
