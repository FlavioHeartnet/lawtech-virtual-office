/* eslint-disable @typescript-eslint/no-explicit-any */
import { MongoConnect } from '../mongo.config';
import type {
	DefendantSearchParams,
	DefendantSearchResult,
	IDefendantRepository
} from '../../../usecases/defendants/repository/defendant.repository';
import Defendant from '../../../entities/defendant/defendant';
import Uuuid from '../../../entities/value-objects/uuid.vo';

export class DefendantMongoRepository extends MongoConnect implements IDefendantRepository {
	constructor() {
		super();
	}
	insertValidate(entity: Defendant): Promise<void> {
		throw new Error('Method not implemented.');
	}
	sortableFields: string[];
	search(props: DefendantSearchParams): Promise<DefendantSearchResult> {
		throw new Error('Method not implemented.');
	}
	insert(entity: Defendant): Promise<void> {
		throw new Error('Method not implemented.');
	}
	bulkInsert(entities: Defendant[]): Promise<void> {
		throw new Error('Method not implemented.');
	}
	update(entity: Defendant): Promise<void> {
		throw new Error('Method not implemented.');
	}
	delete(entity: Defendant): Promise<void> {
		throw new Error('Method not implemented.');
	}
	findById(id: Uuuid): Promise<Defendant> {
		throw new Error('Method not implemented.');
	}
	findAll(): Promise<Defendant[]> {
		throw new Error('Method not implemented.');
	}
	getentity(): new (...args: any[]) => Defendant {
		return Defendant;
	}
	getentityid(): new (...args: any[]) => Uuuid {
		return Uuuid;
	}
}
