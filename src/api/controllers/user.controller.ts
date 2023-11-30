import { CreateUserUseCase } from '../@core/usecases/users/create-user.uc';
import { FindUserByemail } from '../@core/usecases/users/find-user-by-email.uc';
import { UpdateUserUseCase } from '../@core/usecases/users/update-user.uc';
import type { CreateUserDto, UpdateUserDto } from '../dto/user.dto';

//TODO: create controller rules to access the usecases to the remaining functions
export class UserController {
	async getUsers() {}

	async getUserById(id: string) {}

	async getUserByEmail(email: string) {
		return new FindUserByemail().execute({ email });
	}

	async createUser(user: CreateUserDto) {
		return new CreateUserUseCase().execute(user);
	}

	async updateUser(id: string, user: UpdateUserDto) {
		return new UpdateUserUseCase().execute({
			id: id,
			email: user.email,
			oab: user.oab,
			role: user.role,
			name: user.name,
			surname: user.surname
		});
	}

	async deleteUser(id: string) {}

	async forgotPassword(user: any) {}
}
