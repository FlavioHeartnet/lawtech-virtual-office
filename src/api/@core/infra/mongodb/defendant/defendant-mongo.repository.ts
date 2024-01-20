/* eslint-disable @typescript-eslint/no-explicit-any */
import { MongoConnect } from '../mongo.config';
import type {
	DefendantSearchParams,
	DefendantSearchResult,
	IDefendantRepository
} from '../../../usecases/defendants/repository/defendant.repository.interface';
import Defendant from '../../../entities/defendant/defendant';
import Uuuid from '../../../entities/value-objects/uuid.vo';
import { DefendantModel, type DefendantDocument } from './defendant.schema';
import type { Model } from 'mongoose';
import LegalDocuments from '../../../entities/value-objects/legal-documents/legal-documents';
import NotificationError from '../../../@shared/notification/notification.error';
import Address from '../../../entities/value-objects/address/address';

export class DefendantMongoRepository extends MongoConnect implements IDefendantRepository {
	constructor(
		private readonly mongoUri?: string,
		private readonly defendantModel: Model<DefendantDocument> = DefendantModel.create()
	) {
		super();
		this.connect(this.mongoUri);
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
				message: 'document-already-exists',
				context: 'DEFENDANT DATABASE'
			});
		}
	}
	async validateEmail(email: string) {
		const findByEmail = await this.defendantModel.find({ email: email });
		if (findByEmail.length > 0) {
			this.notification.addError({
				message: 'email-already-exists',
				context: 'DEFENDANT DATABASE'
			});
		}
	}
	async validateClientId(clientId: string) {
		const findById = await this.defendantModel.find({ client_id: clientId });
		if (findById.length > 0) {
			this.notification.addError({
				message: 'defendant-already-exists',
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
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
				message: 'external-error:' + e.message,
				context: 'DEFENDANT DATABASE'
			});
			throw new NotificationError(entity.notification.getErrors());
		}
	}
	bulkInsert(entities: Defendant[]): Promise<void> {
		entities.forEach(async (entity) => {
			await this.insert(entity);
		});
		return;
	}
	async update(entity: Defendant): Promise<void> {
		const defendantToUpdate = entity.toJSON();
		await this.insertValidate(entity);
		if (this.notification.hasErrors()) {
			throw new NotificationError(this.notification.getErrors());
		}
		try {
			await this.defendantModel.findOneAndUpdate(
				{ client_id: defendantToUpdate.id },
				defendantToUpdate
			);
		} catch (e) {
			this.notification.addError({
				message: 'external-error:' + e.message,
				context: 'DEFENDANT DATABASE'
			});
			throw new NotificationError(entity.notification.getErrors());
		}
	}
	async delete(entity: Defendant): Promise<void> {
		const clientToDelete = entity.toJSON();
		try {
			await this.defendantModel.deleteOne({ client_id: clientToDelete.id });
		} catch (e) {
			console.log(e);
			this.notification.addError({
				message: 'external-error:' + e.message,
				context: 'DEFENDANT DATABASE'
			});
			throw new NotificationError(entity.notification.getErrors());
		}
	}
	async findById(id: Uuuid): Promise<Defendant> {
		let foundDefendant: Defendant;
		try {
			const findClient = await this.defendantModel.find({ client_id: id.id });
			findClient.forEach((client) => {
				const addresses: Address[] = [];
				client.addresses.forEach((address) => {
					return addresses.push(
						Address.create({
							street: address.street,
							zip: address.zip_code,
							address_number: address.address_number,
							complement: address.complement,
							description: address.description,
							city: address.city,
							state: address.state,
							country: address.city
						})
					);
				});
				const legaldocuments: LegalDocuments[] = [];
				client.legal_documents.forEach((legal_document) => {
					return legaldocuments.push(
						LegalDocuments.create({
							type: legal_document.type,
							document_number: legal_document.document_number
						})
					);
				});
				foundDefendant = Defendant.create(
					{
						name: client.name,
						nacionality: client.nacionality,
						email: client.email,
						marital_status: client.marital_status,
						job_title: client.job_title,
						legal_documents: legaldocuments,
						phone: client.phone,
						addresses: addresses
					},
					new Uuuid(client.id.toString())
				);
			});
			return foundDefendant;
		} catch (e) {
			this.notification.addError({
				message: 'external-error:' + e.message,
				context: 'DEFENDANT DATABASE'
			});
			throw new NotificationError(this.notification.getErrors());
		}
	}
	async findAll(): Promise<Defendant[]> {
		const defendants: Defendant[] = [];
		try {
			const findClient = await this.defendantModel.find();
			findClient.forEach((defendant) => {
				const addresses: Address[] = [];
				defendant.addresses.forEach((address) => {
					return addresses.push(
						Address.create({
							street: address.street,
							zip: address.zip_code,
							address_number: address.address_number,
							complement: address.complement,
							description: address.description,
							city: address.city,
							state: address.state,
							country: address.city
						})
					);
				});
				const legaldocuments: LegalDocuments[] = [];
				defendant.legal_documents.forEach((legal_document) => {
					return legaldocuments.push(
						LegalDocuments.create({
							type: legal_document.type,
							document_number: legal_document.document_number
						})
					);
				});
				defendants.push(
					Defendant.create(
						{
							name: defendant.name,
							nacionality: defendant.nacionality,
							email: defendant.email,
							marital_status: defendant.marital_status,
							job_title: defendant.job_title,
							legal_documents: legaldocuments,
							phone: defendant.phone,
							addresses: addresses
						},
						new Uuuid(defendant.id)
					)
				);
			});
			return defendants;
		} catch (e) {
			this.notification.addError({
				message: 'external-error:' + e.message,
				context: 'DEFENDANT DATABASE'
			});
			throw new NotificationError(this.notification.getErrors());
		}
	}
	getentity(): new (...args: any[]) => Defendant {
		return Defendant;
	}
	getentityid(): new (...args: any[]) => Uuuid {
		return Uuuid;
	}
}
