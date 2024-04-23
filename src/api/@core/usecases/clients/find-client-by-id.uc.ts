import type { FindAddressDTO } from '../../../dto/address.dto';
import type { FindByIdDTO, FindByIdOutput } from '../../../dto/client.dtos';
import type { CreateLegalDocumentsDto } from '../../../dto/legal-documents.dto';
import Uuuid from '../../entities/value-objects/uuid.vo';
import { ClientMongoRepository } from '../../infra/mongodb/client/client-mongo.repository';
import type { IUseCase } from '../use-cases.interface';

export class FindClientbyIdUsecase implements IUseCase<FindByIdDTO, FindByIdOutput> {
	constructor(
		private readonly clientRepository: ClientMongoRepository = new ClientMongoRepository()
	) {}
	async execute(input: FindByIdDTO): Promise<FindByIdOutput> {
		const foundClient = (await this.clientRepository.findById(new Uuuid(input.id)));
		if(foundClient){
			const addresses: FindAddressDTO[] = foundClient.addresses.map((address) => {
				return {
					id: address.toJSON().id,
					street: address.street,
					address: address.toJSON().address,
					address_number: address.address_number,
					complement: address.complement,
					city: address.city,
					state: address.state,
					country: address.country,
					description: address.description,
					zip: address.zip,
					neighbornhood: address.neighbornhood,
				};
			});
	
			const legalDocuments: CreateLegalDocumentsDto[] = foundClient.legal_documents.map(
				(legal_document) => {
					return {
						type: legal_document.type,
						document: legal_document.document_number
					};
				}
			);
			return {
				id: foundClient.toJSON().client_id,
				name: foundClient.name,
				email: foundClient.email,
				legal_documents: legalDocuments,
				phone: foundClient.phone,
				addresses: addresses,
				marital_status: foundClient.marital_status,
				nacionality: foundClient.nacionality,
				job_title: foundClient.job_title
			};
		}
	}
}
