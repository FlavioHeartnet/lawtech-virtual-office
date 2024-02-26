import type { CreateAddressDTO } from '../../../dto/address.dto';
import type { IUseCase } from '../use-cases.interface';

export default class GetAddressUseCase implements IUseCase<string, CreateAddressDTO> {
	async execute(input: string): Promise<CreateAddressDTO> {
		throw new Error();
	}
}
