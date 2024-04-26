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
		const listofAddresses = [
			// !! Warning: Since there a specific function to update address, I will create a dummy one, but this is a bad code and need to be refactor in the future
			Address.create({
				street: 'foo',
				address_number: 1,
				city: 'foo',
				state: 'foo',
				country: 'foo',
				zip: 'foo',
				complement: 'foo',
				description: 'foo',
				neighbornhood: 'foo'
			})
		]

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
