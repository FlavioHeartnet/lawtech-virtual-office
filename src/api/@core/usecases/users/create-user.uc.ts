import type { CreateUserDto } from "../../../dto/user.dto";
import User from "../../entities/user/user";
import { UserRepositoryMongo } from "../../infra/mongodb/user/user-repository.mongo";
import type { IUseCase } from "../use-cases.interface";

export class CreateUserUseCase implements IUseCase<CreateUserDto, boolean> {
    constructor(
		private readonly userRepository: UserRepositoryMongo = new UserRepositoryMongo()
	) {}
    
    execute(input: CreateUserDto): Promise<boolean> {
        const newUser = User.create({
            name: input.name,
            email: input.email,
            role: "New User",
            oab: input.oab,
        });
        this.userRepository.insert(newUser);
        return Promise.resolve(true);
    }

}