/* eslint-disable @typescript-eslint/no-explicit-any */
import { MongoConnect } from '../mongo.config';
import type {
	DefendantSearchParams,
	DefendantSearchResult,
	IDefendantRepository
} from '../../../usecases/defendants/repository/defendant.repository';
import Defendant from '../../../entities/defendant/defendant';
import Uuuid from '../../../entities/value-objects/uuid.vo';
import { DefendantModel, type DefendantDocument } from './defendant.schema';
import type { Model } from 'mongoose';
import type LegalDocuments from '../../../entities/value-objects/legal-documents/legal-documents';
import NotificationError from '../../../@shared/notification/notification.error';

export class DefendantMongoRepository extends MongoConnect implements IDefendantRepository {
	constructor(
		private readonly mongoUri?: string,
		private readonly defendantModel: Model<DefendantDocument> = DefendantModel.create()
	) {
		super();
	}
	async validateLegalDocuments(legalDocuments: LegalDocuments[]) {
		const documentnumberList = [];
		legalDocuments.forEach((document) => {
			documentnumberList.push(document.document_number);
		});
		const findLegalDocuments = await this.defendantModel.find({
			document_number: { $all: documentnumberList }
		});
		if (findLegalDocuments.length > 0) {
			this.notification.addError({
				message: 'Document already exists',
				context: 'DEFENDANT DATABASE'
			});
		}
	}
	async validateEmail(email: string) {
		const findByEmail = await this.defendantModel.find({ email: email });
		if (findByEmail.length > 0) {
			this.notification.addError({
				message: 'E-mail already exists',
				context: 'DEFENDANT DATABASE'
			});
		}
	}
	async validateClientId(clientId: string) {
		const findById = await this.defendantModel.find({ client_id: clientId });
		if (findById.length > 0) {
			this.notification.addError({
				message: 'DEFENDANT already exists',
				context: 'DEFENDANT DATABASE'
			});
		}
	}
	async insertValidate(entity: Defendant): Promise<void> {
		await this.validateClientId(entity.toJSON().id);
		await this.validateEmail(entity.email);
		await this.validateLegalDocuments(entity.legal_documents);
	}
	sortableFields: string[];
	search(props: DefendantSearchParams): Promise<DefendantSearchResult> {
		throw new Error('Method not implemented.');
	}
	async insert(entity: Defendant): Promise<void> {
		const newdefendant = entity.toJSON();
		await this.insertValidate(entity);
		if (this.notification.hasErrors()) {
			throw new NotificationError(this.notification.getErrors());
		}
		try {
			await new this.defendantModel(newdefendant).save();
		} catch (e) {
			this.notification.addError({
				message: 'External error:' + e.message,
				context: 'DEFENDANT DATABASE'
			});
			throw new NotificationError(entity.notification.getErrors());
		}
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
