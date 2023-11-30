import type { CreateUserDto } from '../../../dto/user.dto';
import User from '../../entities/user/user';
import { UserRepositoryMongo } from '../../infra/mongodb/user/user-repository.mongo';
import type { IUseCase } from '../use-cases.interface';

export class CreateUserUseCase implements IUseCase<CreateUserDto, boolean> {
	constructor(private readonly userRepository: UserRepositoryMongo = new UserRepositoryMongo()) {}

	async execute(input: CreateUserDto): Promise<boolean> {
		const newUser = User.create({
			name: input.name,
			surname: input.surname,
			email: input.email,
			role: 'New User',
			oab: input.oab
		});
		try {
			await this.userRepository.insert(newUser);
			return true;
		} catch (e) {
			console.log(e);
			return false;
		}
	}
}
