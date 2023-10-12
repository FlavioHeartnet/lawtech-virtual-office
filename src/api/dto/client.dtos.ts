import type { CreateAddressDTO } from './address.dto';
import type { CreateLegalDocumentsDto } from './legal-documents.dto';

/* eslint-disable @typescript-eslint/no-unused-vars */
// *Create Client DTO
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
};

// *Create Many DTO
export class CreateManyDTO {
	constructor(public clients: CreateClientDTO[]) {}
}

export type CreateManyDTOOutput = {
	clients: CreateOutputDto[];
};

// *Find by id DTO
export class FindByIdDTO {
	constructor(public id: string) {}
}

export type FindByIdOutput = {
	id: string;
	name: string;
	email: string;
	legal_documents: CreateLegalDocumentsDto[];
	phone: string;
	addresses: CreateAddressDTO[];
	job_title: string;
	nacionality: string;
	marital_status: string;
};
