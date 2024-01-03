import type { FindByIdDTO } from '../../../dto/client.dtos';
import { ClientMongoRepository } from '../../infra/mongodb/client/client-mongo.repository';
import type { IUseCase } from '../use-cases.interface';

export class FindAllClientsUsecase implements IUseCase<void, FindByIdDTO[]> {
	constructor(
		private readonly clientRepository: ClientMongoRepository = new ClientMongoRepository()
	) {}
	async execute(): Promise<FindByIdDTO[]> {
		try {
			const result = await this.clientRepository.findAll();
			const findoutput = await result.map((x) => {
				const client = x.toJSON();
				return {
					id: x.id.id,
					name: client.name,
					email: client.email,
					phone: client.phone,
					addresses: client.addresses,
					legal_documents: client.legal_documents
				} as FindByIdDTO;
			});
			return findoutput;
		} catch (error) {
			throw new Error(error.errors[0].message);
		}
	}
}
