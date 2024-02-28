import { Schema, model } from 'mongoose';

export interface IClientSchema {
	client_id: string;
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
	address_id: string;
	address_number: number;
	street: string;
	number: string;
	complement: string;
	city: string;
	state: string;
	zip: string;
	description: string;
	country: string;
	neighbornhood: string;
};

export const clientSchema = new Schema<IClientSchema>({
	client_id: { type: String, required: true },
	name: { type: String, required: true },
	email: { type: String, required: true },
	legal_documents: Array,
	phone: { type: String, required: true },
	addresses: Array,
	job_title: { type: String, required: false },
	nacionality: { type: String, required: false },
	marital_status: { type: String, required: false }
});

export interface ClientDocument extends IClientSchema, Document {}

export class ClientModel {
	static create() {
		return model<ClientDocument>('Client', clientSchema);
	}
}
