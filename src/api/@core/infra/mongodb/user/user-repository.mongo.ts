import type { Model } from "mongoose";
import User from "../../../entities/user/user";
import type Uuuid from "../../../entities/value-objects/uuid.vo";
import type { IUserRepository, UserSearchParams, UserSearchResult } from "../../../usecases/users/repository/user.repository.interface";
import { MongoConnect } from "../mongo.config";
import { UserModel, type UserDocument } from "./user.schema";
import NotificationError from "../../../@shared/notification/notification.error";

export class UserRepositoryMongo extends MongoConnect implements IUserRepository {
    
    constructor(
		private readonly mongoUri?: string,
		private readonly userModel: Model<UserDocument> = UserModel.create()
	) {
		super();
		this.connect(mongoUri);
	}
    
    async findByEmail(email: string): Promise<User> {
        const findByEmail = await this.userModel.find({ email: email });
		if (findByEmail.length > 0) {
			return new User({
                email: findByEmail[0].email,
                name: findByEmail[0].name,
                oab: findByEmail[0].oab,
                role: findByEmail[0].role,
                id: findByEmail[0].id,
            });
		}
    }
    
    sortableFields: string[];
    search(props: UserSearchParams): Promise<UserSearchResult> {
        throw new Error("Method not implemented.");
    }
    async validateEmail(email: string) {
		const findByEmail = await this.userModel.find({ email: email });
		if (findByEmail.length > 0) {
			this.notification.addError({
				message: 'E-mail already exists',
				context: 'USER DATABASE'
			});
		}
	}
    async validateOAB(oab: string) {
		const findByEmail = await this.userModel.find({ oab: oab });
		if (findByEmail.length > 0) {
			this.notification.addError({
				message: 'OAB already exists',
				context: 'USER DATABASE'
			});
		}
	}
    async insertValidate(entity: User): Promise<void> {
        await this.validateEmail(entity.email);
        await this.validateOAB(entity.oab);
    }
    async insert(entity: User): Promise<void> {
        const newUser = entity.toJSON();
        await this.insertValidate(entity);
        try{
            this.userModel.create(newUser);
        }catch(e){
            this.notification.addError({
				message: 'External error:' + e.message,
				context: 'USER DATABASE'
			});
			throw new NotificationError(entity.notification.getErrors());
        }
        
    }
    bulkInsert(entities: User[]): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(entity: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(entity: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(id: Uuuid): Promise<User> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    getentity(): new (...args: any[]) => User {
        throw new Error("Method not implemented.");
    }
    getentityid(): new (...args: any[]) => Uuuid {
        throw new Error("Method not implemented.");
    }

}