import type { FindUserDtoOutput, FindUserbyEmailDto } from "../../../dto/user.dto";
import { UserRepositoryMongo } from "../../infra/mongodb/user/user-repository.mongo";
import type { IUseCase } from "../use-cases.interface";

export class FindUserByemail implements IUseCase<FindUserbyEmailDto, FindUserDtoOutput> {
    constructor(
		private readonly userRepository: UserRepositoryMongo = new UserRepositoryMongo()
	) {}
    async execute(input: FindUserbyEmailDto): Promise<FindUserDtoOutput> {
        const resp = await this.userRepository.findByEmail(input.email);
        const jsonUser = resp.toJSON();
        return {
            email: jsonUser.email,
            name: jsonUser.name,
            oab: jsonUser.oab,
            role: jsonUser.role,
        }

    }
   
}