import type { CreateAddressDTO } from '../../../dto/address.dto';
import  { ClientMongoRepository } from '../../infra/mongodb/client/client-mongo.repository';
import type { IUseCase } from '../use-cases.interface';

export default class GetAddressUseCase implements IUseCase<string, CreateAddressDTO> {
	constructor(
		private readonly clientRepository: ClientMongoRepository = new ClientMongoRepository()
	) {}
	async execute(input: string): Promise<CreateAddressDTO> {
		return await this.clientRepository.getAddress(input);
	}
}
