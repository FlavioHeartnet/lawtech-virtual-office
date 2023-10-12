import type { Model } from 'mongoose';
import Client from '../../../entities/client/client';
import Uuuid from '../../../entities/value-objects/uuid.vo';
import type {
	ClientSearchParams,
	ClientSearchResult,
	IClientRepository
} from '../../../usecases/clients/repository/client.repository';
import { ClientModel, type ClientDocument } from './client.schema';
import { MongoConnect } from '../mongo.config';
import NotificationError from '../../../@shared/notification/notification.error';

export class ClientMongoRepository extends MongoConnect implements IClientRepository {
	constructor(
		private readonly mongoUri?: string,
		private readonly clientModel: Model<ClientDocument> = ClientModel.create()
	) {
		super();
		this.connect(mongoUri);
	}
    async validateLegalDocuments(entity: Client) {
        const documentnumberList = []
        entity.legal_documents.forEach( (document) => {
            documentnumberList.push(document.document_number)
        });
        const findLegalDocuments = await this.clientModel.find({ document_number: {$all: documentnumberList}});
        if (findLegalDocuments.length > 0) {
            entity.notification.addError({
                message: 'Document already exists',
                context: 'CLIENT DATABASE'
            });
        }
    }
	async validateEmail(entity: Client) {
		const clientToValidate = entity.toJSON();
		const findByEmail = await this.clientModel.find({ email: clientToValidate.email });
		if (findByEmail.length > 0) {
			entity.notification.addError({
				message: 'E-mail already exists',
				context: 'CLIENT DATABASE'
			});
		}
	}
	async validateClientId(entity: Client) {
		const clientToValidate = entity.toJSON();
		const findById = await this.clientModel.find({ client_id: clientToValidate.client_id });
		if (findById.length > 0) {
			entity.notification.addError({
				message: 'Client already exists',
				context: 'CLIENT DATABASE'
			});
		}
	}

	sortableFields: string[];
	search(props: ClientSearchParams): Promise<ClientSearchResult> {
		throw new Error('Method not implemented.');
	}
    async insertValidate(entity: Client){
        await this.validateClientId(entity);
		await this.validateEmail(entity);
        await this.validateLegalDocuments(entity);
    }
	async insert(entity: Client): Promise<void> {
		const newclient = entity.toJSON();
		await this.insertValidate(entity);
		if (entity.notification.hasErrors()) {
			throw new NotificationError(entity.notification.getErrors());
		}
		try {
			await new this.clientModel(newclient).save();
		} catch (e) {
			entity.notification.addError({
				message: 'External error:' + e.message,
				context: 'CLIENT DATABASE'
			});
			throw new NotificationError(entity.notification.getErrors());
		}
	}
	 bulkInsert(entities: Client[]): Promise<void> {
        entities.forEach(async (entity) => {
			await this.insert(entity);
		});
        return;
	}
	update(entity: Client): Promise<void> {
		throw new Error('Method not implemented.');
	}
	delete(entity: Client): Promise<void> {
		throw new Error('Method not implemented.');
	}
	findById(id: Uuuid): Promise<Client> {
		throw new Error('Method not implemented.');
	}
	findAll(): Promise<Client[]> {
		throw new Error('Method not implemented.');
	}
	getentity(): new (...args: any[]) => Client {
		return Client;
	}
	getentityid(): new (...args: any[]) => Uuuid {
		return Uuuid;
	}
}
