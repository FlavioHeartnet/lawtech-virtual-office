import type { FindByIdDTO, FindByIdOutput } from '../../../dto/client.dtos';
import { ClientMongoRepository } from '../../infra/mongodb/client/client-mongo.repository';
import type { IUseCase } from '../use-cases.interface';

export class FindClientbyIdUsecase implements IUseCase<FindByIdDTO, FindByIdOutput> {
	constructor(
		private readonly clientRepository: ClientMongoRepository = new ClientMongoRepository()
	) {}
	execute(input: FindByIdDTO): Promise<FindByIdOutput> {
		throw new Error('Method not implemented.');
	}
}
