import type { CreateAddressDTO } from '../../../dto/address.dto';
import type { FindByIdDTO, FindByIdOutput } from '../../../dto/client.dtos';
import type { CreateLegalDocumentsDto } from '../../../dto/legal-documents.dto';
import { ClientMongoRepository } from '../../infra/mongodb/client/client-mongo.repository';
import type { IUseCase } from '../use-cases.interface';

export class FindAllClientsUsecase implements IUseCase<void, FindByIdDTO[]> {
	constructor(
		private readonly clientRepository: ClientMongoRepository = new ClientMongoRepository()
	) {}
	async execute(): Promise<FindByIdOutput[]> {
		try {
			const findoutput: FindByIdOutput[] = [];
			const result = await this.clientRepository.findAll();
			result.forEach((x) => {
				const client = x.toJSON();
				const addressesDtO: CreateAddressDTO[] = [];
				client.addresses.forEach((address) => {
					addressesDtO.push({
						street: address.street,
						number: address.address_number,
						complement: address.complement,
						city: address.city,
						state: address.state,
						zipCode: address.zip,
						country: address.country,
						description: address.description,
						neighborhood: '' //TODO: Create neighborhood in the database
					});
				});
				const legal_documents: CreateLegalDocumentsDto[] = client.legal_documents.map(
					(document) => {
						return {
							type: document.type,
							document: document.document_number
						} as CreateLegalDocumentsDto;
					}
				);

				findoutput.push({
					id: x.id.id,
					name: client.name,
					email: client.email,
					phone: client.phone,
					addresses: addressesDtO,
					legal_documents: legal_documents,
					marital_status: client.marital_status,
					nacionality: client.nacionality,
					job_title: client.job_title
				});
			});
			return findoutput;
		} catch (error) {
			throw new Error(error.errors[0].message);
		}
	}
}
