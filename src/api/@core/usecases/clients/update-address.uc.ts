import type { UpdateAddressDTO } from '../../../dto/address.dto';
import Address from '../../entities/value-objects/address/address';
import { ClientMongoRepository } from '../../infra/mongodb/client/client-mongo.repository';
import type { IUseCase } from '../use-cases.interface';

export default class UpdateAddressUseCase implements IUseCase<UpdateAddressDTO, boolean> {
	constructor(
		private readonly clientRepository: ClientMongoRepository = new ClientMongoRepository()
	) {}
	async execute(input: UpdateAddressDTO): Promise<boolean> {
		try{
			return await this.clientRepository.updateAddress(
				Address.create({
					...input
				})
			);
		}catch(e){
			throw new Error(e);
		}
		
	}
}
