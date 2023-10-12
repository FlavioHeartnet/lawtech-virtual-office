import type { CreateManyDTO, CreateManyDTOOutput } from '../../../dto/client.dtos';
import Client from '../../entities/client/client';
import Address from '../../entities/value-objects/address/address';
import LegalDocuments from '../../entities/value-objects/legal-documents/legal-documents';
import { ClientMongoRepository } from '../../infra/mongodb/client/client-mongo.repository';
import type { IUseCase } from '../use-cases.interface';

export class CreateManyUseCase implements IUseCase<CreateManyDTO, CreateManyDTOOutput> {
	constructor(
		private readonly clientRepository: ClientMongoRepository = new ClientMongoRepository()
	) {}
	async execute(input: CreateManyDTO): Promise<CreateManyDTOOutput> {
		const clientList: Client[] = [];
		input.clients.forEach((client) => {
			const listofAddresses = client.addresses.map((address) =>
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

			const listofLegalDocuments = client.legal_documents.map((legalDocument) =>
				LegalDocuments.create({
					type: legalDocument.type,
					document_number: legalDocument.document
				})
			);
			clientList.push(
				Client.create({
					name: client.name,
					email: client.email,
					phone: client.phone,
					legal_documents: listofLegalDocuments,
					addresses: listofAddresses,
					nacionality: client.nacionality,
					marital_status: client.marital_status,
					job_title: client.job_title
				})
			);
		});

		await this.clientRepository.bulkInsert(clientList);

		const clientListOutput = [];
		clientList.map((client) => {
			clientListOutput.push({
				id: client.id.id,
				name: client.name,
				email: client.email
			});
		});
		return Promise.resolve({
			clients: clientListOutput
		});
	}
}
