import type { CreateAddressDTO } from "./address.dto";
import type { CreateLegalDocumentsDto } from "./legal-documents.dto";

/* eslint-disable @typescript-eslint/no-unused-vars */
export default class CreateClientDTO {
	constructor(
		public name: string,
		public email: string,
		public legal_documents: CreateLegalDocumentsDto[],
		public phone: string,
		public addresses: CreateAddressDTO[],
		public job_title: string,
		public nacionality: string,
		public marital_status: string
	) {}
}

export type CreateOutputDto = {
	id: string;
	name: string;
	email: string;
}