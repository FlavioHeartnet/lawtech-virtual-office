/* eslint-disable @typescript-eslint/no-unused-vars */
import type { CreateOutputDto } from '../../../dto/client.dtos';
import type CreateClientDTO from '../../../dto/client.dtos';
import Client from '../../entities/client/client';
import Address from '../../entities/value-objects/address/address';
import LegalDocuments from '../../entities/value-objects/legal-documents/legal-documents';
import type { IUseCase } from '../use-cases.interface';

export default class CreateClient implements IUseCase<CreateClientDTO, CreateOutputDto> {
	execute(createdto: CreateClientDTO): Promise<CreateOutputDto> {
		const listofAddresses = createdto.addresses.map((address) =>
			Address.create({
				street: address.street,
				address_number: address.number,
				city: address.city,
				state: address.state,
				country: address.country,
				zip: address.zipCode,
				complement: address.complement,
				description: address.description
			})
		);

		const listofLegalDocuments = createdto.legal_documents.map((legalDocument) =>
			LegalDocuments.create({
				type: legalDocument.type,
				document_number: legalDocument.document
			})
		);
		const newClient = Client.create({
			name: createdto.name,
			email: createdto.email,
			addresses: listofAddresses,
			phone: createdto.phone,
			job_title: createdto.job_title,
			nacionality: createdto.nacionality,
			marital_status: createdto.marital_status,
			legal_documents: listofLegalDocuments
		});

		return Promise.resolve({
			id: newClient.id.id,
			name: newClient.name,
			email: newClient.email
		});
	}
}
