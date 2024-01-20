import type { Model } from 'mongoose';
import type Lawsuit from '../../../entities/lawsuit/lawsuit';
import type Uuuid from '../../../entities/value-objects/uuid.vo';
import type {
	ILawsuitRepository,
	LawsuitSearchParams,
	LawsuitSearchResult
} from '../../../usecases/lawsuits/repository/lawsuit.repository.interface';
import { MongoConnect } from '../mongo.config';
import { LawsuitModel, type LawsuitDocument } from './lawsuit.schema';

export class LawsuitMongoRepository extends MongoConnect implements ILawsuitRepository {
	constructor(
		private readonly mongoUri?: string,
		private readonly lawsuitModel: Model<LawsuitDocument> = LawsuitModel.create()
	) {
		super();
		this.connect(this.mongoUri);
	}
	insertValidate(entity: Lawsuit): Promise<void> {
		throw new Error('Method not implemented.');
	}
	sortableFields: string[];
	search(props: LawsuitSearchParams): Promise<LawsuitSearchResult> {
		throw new Error('Method not implemented.');
	}
	insert(entity: Lawsuit): Promise<void> {
		throw new Error('Method not implemented.');
	}
	bulkInsert(entities: Lawsuit[]): Promise<void> {
		throw new Error('Method not implemented.');
	}
	update(entity: Lawsuit): Promise<void> {
		throw new Error('Method not implemented.');
	}
	delete(entity: Lawsuit): Promise<void> {
		throw new Error('Method not implemented.');
	}
	findById(id: Uuuid): Promise<Lawsuit> {
		throw new Error('Method not implemented.');
	}
	findAll(): Promise<Lawsuit[]> {
		throw new Error('Method not implemented.');
	}
	getentity(): new (...args: any[]) => Lawsuit {
		throw new Error('Method not implemented.');
	}
	getentityid(): new (...args: any[]) => Uuuid {
		throw new Error('Method not implemented.');
	}
}
