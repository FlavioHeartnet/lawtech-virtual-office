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
import type LegalDocuments from '../../../entities/value-objects/legal-documents/legal-documents';
import Address from '../../../entities/value-objects/address/address';

export class ClientMongoRepository extends MongoConnect implements IClientRepository {
	constructor(
		private readonly mongoUri?: string,
		private readonly clientModel: Model<ClientDocument> = ClientModel.create()
	) {
		super();
		this.connect(mongoUri);
	}
    async validateLegalDocuments(legalDocuments: LegalDocuments[]) {
        const documentnumberList = []
        legalDocuments.forEach( (document) => {
            documentnumberList.push(document.document_number)
        });
        const findLegalDocuments = await this.clientModel.find({ document_number: {$all: documentnumberList}});
        if (findLegalDocuments.length > 0) {
            this.notification.addError({
                message: 'Document already exists',
                context: 'CLIENT DATABASE'
            });
        }
    }
	async validateEmail(email: string) {
		const findByEmail = await this.clientModel.find({ email: email });
		if (findByEmail.length > 0) {
			this.notification.addError({
				message: 'E-mail already exists',
				context: 'CLIENT DATABASE'
			});
		}
	}
	async validateClientId(clientId: string) {
		const findById = await this.clientModel.find({ client_id: clientId });
		if (findById.length > 0) {
			this.notification.addError({
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
        await this.validateClientId(entity.id.id);
		await this.validateEmail(entity.email);
        await this.validateLegalDocuments(entity.legal_documents);
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
			this.notification.addError({
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
	async findById(id: Uuuid): Promise<Client> {
		let foundClient: Client 
		try{
			const findClient = await this.clientModel.find({client_id: id.id})
			findClient.forEach(client => {
				const addresses: Address[]  = []
				client.addresses.forEach(address => {
					return addresses.push(Address.create({
						street: address.street,
						zip: address.zip_code,
						address_number: address.address_number,
						complement: address.complement,
						description: address.description,
						city: address.city,
						state: address.state,
						country: address.city
					}));
				})
				foundClient = Client.create({
					name: client.name,
					nacionality: client.nacionality,
					email: client.email,
					marital_status: client.marital_status,
					job_title: client.job_title,
					legal_documents: [],
					phone: '',
					addresses: addresses
				}, new Uuuid(client.client_id.toString()));
			});
			return foundClient;
		}catch(e){
			this.notification.addError({
				message: 'External error:' + e.message,
				context: 'CLIENT DATABASE'
			});
			throw new NotificationError(this.notification.getErrors());
		}
	}
	async findAll(): Promise<Client[]> {
		const clients: Client[] = []
		try{
			const findClient = await this.clientModel.find()
			findClient.forEach(client => {
				 clients.push(Client.create({
					name: client.name,
					nacionality: client.nacionality,
					email: client.email,
					marital_status: client.marital_status,
					job_title: client.job_title,
					legal_documents: [],
					phone: '',
					addresses: []
				}, new Uuuid(client.client_id.toString())));
			});
			return clients;
		}catch(e){
			this.notification.addError({
				message: 'External error:' + e.message,
				context: 'CLIENT DATABASE'
			});
			throw new NotificationError(this.notification.getErrors());
		}
	}
	getentity(): new (...args: any[]) => Client {
		return Client;
	}
	getentityid(): new (...args: any[]) => Uuuid {
		return Uuuid;
	}
}
