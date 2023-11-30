import type { UpdateUserDto } from '../../../dto/user.dto';
import User from '../../entities/user/user';
import Uuuid from '../../entities/value-objects/uuid.vo';
import { UserRepositoryMongo } from '../../infra/mongodb/user/user-repository.mongo';
import type { IUseCase } from '../use-cases.interface';

export class UpdateUserUseCase implements IUseCase<UpdateUserDto, boolean> {
	constructor(private readonly userRepository: UserRepositoryMongo = new UserRepositoryMongo()) {}
	async execute(input: UpdateUserDto): Promise<boolean> {
		await this.userRepository.update(
			new User({
				email: input.email,
				name: input.name,
				oab: input.oab,
				role: input.role,
				id: new Uuuid(input.id)
			})
		);
		return Promise.resolve(true);
	}
}
