import type { Model } from 'mongoose';
import Lawsuit from '../../../entities/lawsuit/lawsuit';
import Uuuid from '../../../entities/value-objects/uuid.vo';
import type {
	ILawsuitRepository,
	LawsuitSearchParams,
	LawsuitSearchResult
} from '../../../usecases/lawsuits/repository/lawsuit.repository.interface';
import { MongoConnect } from '../mongo.config';
import { LawsuitModel, type LawsuitDocument } from './lawsuit.schema';
import NotificationError from '../../../@shared/notification/notification.error';
import Phase from '../../../entities/value-objects/phase';
import User from '../../../entities/user/user';
import { ClientMongoRepository } from '../client/client-mongo.repository';
import { DefendantMongoRepository } from '../defendant/defendant-mongo.repository';
import { UserRepositoryMongo } from '../user/user-repository.mongo';
import type Client from '../../../entities/client/client';
import type Defendant from '../../../entities/defendant/defendant';

export class LawsuitMongoRepository extends MongoConnect implements ILawsuitRepository {
	constructor(
		private readonly mongoUri?: string,
		private readonly lawsuitModel: Model<LawsuitDocument> = LawsuitModel.create()
	) {
		super();
		this.connect();
	}

	async getClientbyId(id: string) {
		return await new ClientMongoRepository().findById(new Uuuid(id));
	}
	async getDefendantbyId(id: string) {
		return await new DefendantMongoRepository().findById(new Uuuid(id));
	}
	async getUserbyId(id: string) {
		return await new UserRepositoryMongo().findById(new Uuuid(id));
	}
	async findByCnj(cnj: string): Promise<Lawsuit> {
		const result = await this.lawsuitModel.find({ cnj: cnj });
		if (result.length > 0) {
			return await this.toEntity(result[0]);
		}
	}
	async insertValidate(entity: Lawsuit): Promise<void> {
		const newLawsuit = entity.toJSON();
		//TODO: this is returning null, something is wrong
		const result = await this.lawsuitModel.find({ cnj: newLawsuit.cnj});
		if (result.length > 0) {
			this.notification.addError({
				message: 'cnj-already-exists',
				context: 'LAWSUIT DATABASE'
			});
		}
	}
	sortableFields: string[];
	search(props: LawsuitSearchParams): Promise<LawsuitSearchResult> {
		throw new Error('Method not implemented.');
	}
	async insert(entity: Lawsuit): Promise<void> {
		const newLawsuit = entity.toJSON();
		await this.insertValidate(entity);
		if (this.notification.hasErrors()) {
			throw new NotificationError(this.notification.getErrors());
		}
		const lawsuitClients = newLawsuit.clients.map((client) => {
			return { client_id: client.id.id };
		});
		const lawsuitDefendants = newLawsuit.defendants.map((defendant) => {
			return { client_id: defendant.id.id };
		});
		try {
			await new this.lawsuitModel({
				cnj: newLawsuit.cnj,
				subject: newLawsuit.subject,
				distributionDate: newLawsuit.distribution_date,
				foro: newLawsuit.foro,
				vara: newLawsuit.vara,
				qualification: newLawsuit.qualification,
				case_cost: newLawsuit.case_cost,
				fee: newLawsuit.fee,
				clients: lawsuitClients,
				defendants: lawsuitDefendants,
				phase: Phase.ACKNOWLEDGE,
				responsible: newLawsuit.responsible.id.id
			}).save();
		} catch (e) {
			this.notification.addError({
				message: 'external-error:' + e.message,
				context: 'LAWSUIT DATABASE'
			});
			throw new NotificationError(entity.notification.getErrors());
		}
	}
	bulkInsert(entities: Lawsuit[]): Promise<void> {
		entities.forEach(async (lawsuit) => {
			await this.insert(lawsuit);
		});
		return;
	}
	update(entity: Lawsuit): Promise<void> {
		throw new Error('Method not implemented.');
	}
	delete(entity: Lawsuit): Promise<void> {
		throw new Error('Method not implemented.');
	}
	async findById(id: Uuuid): Promise<Lawsuit> {
		const result = await this.lawsuitModel.find({ id: id.id });
		if (result.length > 0) {
			return await this.toEntity(result[0]);
		}
	}
	async findAll(): Promise<Lawsuit[]> {
		const result = await this.lawsuitModel.find();
		const lawsuits: Lawsuit[] = [];
		if (result.length > 0) {
			result.forEach(async (lawsuit) => {
				lawsuits.push(await this.toEntity(lawsuit));
			});
		}
		return lawsuits;
	}
	getentity(): new (...args: any[]) => Lawsuit {
		throw new Error('Method not implemented.');
	}
	getentityid(): new (...args: any[]) => Uuuid {
		throw new Error('Method not implemented.');
	}

	async toEntity(dbObject): Promise<Lawsuit> {
		const clients: Client[] = [];
		dbObject.clients.forEach(async (client) => {
			clients.push(await this.getClientbyId(client.client_id));
		});
		const defendants: Defendant[] = [];
		dbObject.defendants.map(async (defendant) => {
			defendants.push(await this.getDefendantbyId(defendant.client_id));
		});
		return Lawsuit.create({
			cnj: dbObject.cnj,
			subject: dbObject.subject,
			distribution_date: dbObject.distributionDate,
			foro: dbObject.foro,
			vara: dbObject.vara,
			qualification: dbObject.qualification,
			case_cost: dbObject.case_cost,
			fee: dbObject.fee,
			clients: clients,
			defendants: defendants,
			phase: dbObject.phase,
			lawsuit_class: dbObject.lawsuit_class,
			lawsuit_official_link: dbObject.lawsuit_official_link,
			last_moviment: null,
			events: [],
			tasks: [],
			responsible: await this.getUserbyId(dbObject.responsible.user_id),
			rite: dbObject.rite
		});
	}
}
