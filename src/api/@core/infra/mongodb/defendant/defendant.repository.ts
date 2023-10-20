import { MongoConnect } from "../mongo.config";
import { IDefendantRepository } from "../../../usecases/defendants/repository/defendant.repository";

export class DefendantMongoRepository extends MongoConnect implements IDefendantRepository {
	constructor(){
		super();
	}

}
