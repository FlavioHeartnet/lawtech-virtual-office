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

export class LawsuitMongoRepository extends MongoConnect implements ILawsuitRepository {
	constructor(
		private readonly mongoUri?: string,
		private readonly lawsuitModel: Model<LawsuitDocument> = LawsuitModel.create()
	) {
		super();
		this.connect(this.mongoUri);
	}
	async findByCnj(cnj: string): Promise<Lawsuit> {
		const result = await this.lawsuitModel.find({ cnj: cnj });
		if (result.length > 0) {
			return Lawsuit.create({
				cnj: result[0].cnj,
				subject: result[0].subject,
				distribution_date: result[0].distributionDate,
				foro: result[0].foro,
				vara: result[0].vara,
				qualification: result[0].qualification,
				case_cost: result[0].case_cost,
				fee: result[0].fee,
				clients: [],
				defendants: [],
				phase: result[0].phase,
				lawsuit_class: result[0].lawsuit_class,
				lawsuit_official_link: result[0].lawsuit_official_link,
				last_moviment: null,
				events: [],
				tasks: [],
				responsible: User.create({
					name: result[0].responsible.name,
					email: result[0].responsible.email,
					role: "",
					surname: "",
					id: new Uuuid(result[0].responsible.user_id),
				}),
				rite: result[0].rite
			});
		}
	}
	async insertValidate(entity: Lawsuit): Promise<void> {
		const newLawsuit = entity.toJSON();
		const result = await this.lawsuitModel.find((lawsuit) => lawsuit.cnj == newLawsuit.cnj); 
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
		const lawsuitClients = newLawsuit.clients.map((client)=>{
			return { client_id: client.id, name: client.name }
		})
		const lawsuitDefendants = newLawsuit.defendants.map((defendant)=>{
			return { client_id: defendant.id, name: defendant.name }
		})
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
				phase: Phase.ACKNOWLEDGE
			}).save();
		}catch(e){
			this.notification.addError({
				message: 'external-error:' + e.message,
				context: 'LAWSUIT DATABASE'
			});
			throw new NotificationError(entity.notification.getErrors());
		}

	}
	bulkInsert(entities: Lawsuit[]): Promise<void> {
		entities.forEach(async (lawsuit)=>{
			await this.insert(lawsuit);
		});
		return
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
