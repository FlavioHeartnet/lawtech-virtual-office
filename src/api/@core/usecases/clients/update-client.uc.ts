/* eslint-disable @typescript-eslint/no-unused-vars */
import type { UpdateClientDTO, UpdateOutputDto } from '../../../dto/client.dtos';
import Client from '../../entities/client/client';
import Address from '../../entities/value-objects/address/address';
import LegalDocuments from '../../entities/value-objects/legal-documents/legal-documents';
import Uuuid from '../../entities/value-objects/uuid.vo';
import { ClientMongoRepository } from '../../infra/mongodb/client/client-mongo.repository';
import type { IUseCase } from '../use-cases.interface';

export default class UpdateClientUseCase implements IUseCase<UpdateClientDTO, UpdateOutputDto> {
	constructor(
		private readonly clientRepository: ClientMongoRepository = new ClientMongoRepository()
	) {}

	async execute(updateto: UpdateClientDTO): Promise<UpdateOutputDto> {
		const listofAddresses = updateto.addresses.map((address) =>
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

		const listofLegalDocuments = updateto.legal_documents.map((legalDocument) =>
			LegalDocuments.create({
				type: legalDocument.type,
				document_number: legalDocument.document
			})
		);
		const newClient = Client.create(
			{
				name: updateto.name,
				email: updateto.email,
				addresses: listofAddresses,
				phone: updateto.phone,
				job_title: updateto.job_title,
				nacionality: updateto.nacionality,
				marital_status: updateto.marital_status,
				legal_documents: listofLegalDocuments
			},
			new Uuuid(updateto.id)
		);
		await this.clientRepository.update(newClient);
		return Promise.resolve({
			id: newClient.id.id
		});
	}
}
