/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
import LegalDocuments from '../../../entities/value-objects/legal-documents/legal-documents';
import Address from '../../../entities/value-objects/address/address';

export class ClientMongoRepository extends MongoConnect implements IClientRepository {
	async updateAddress(address: Address, client_id: string): Promise<boolean> {
		try {
			const address_id = address.toJSON().id;
			const schemaAddress = address.toJSON();
			const updateDocument = {
				$set: { 
						"addresses.$[i].address_number": schemaAddress.address_number,
						"addresses.$[i].street": schemaAddress.street,
						"addresses.$[i].neighbornhood": schemaAddress.neighbornhood,
						"addresses.$[i].city": schemaAddress.city,
						"addresses.$[i].state": schemaAddress.state,
						"addresses.$[i].country": schemaAddress.country,
						"addresses.$[i].zip": schemaAddress.zip,
						"addresses.$[i].complement": schemaAddress.complement,
						"addresses.$[i].description": schemaAddress.description
					  },
			 }
			  const options = {
				arrayFilters: [
				  {
					"i.address_id": address_id,
				  }
				]};  
			const result = await this.clientModel.updateOne({ client_id: client_id }, updateDocument,options);
			
			if(result){
				return true;
			}
			this.notification.addError({
				message: '',
				context: 'CLIENT DATABASE'
			});
			throw new Error('not-found-error: no address found with the given id');
		} catch (e) {
			this.notification.addError({
				message: 'external-error:' + e.message,
				context: 'CLIENT DATABASE'
			});
			throw new NotificationError(this.notification.getErrors());
		}
	}
	constructor(
		private readonly mongoUri?: string,
		private readonly clientModel: Model<ClientDocument> = ClientModel.create()
	) {
		super();
		this.connect(this.mongoUri);
	}
	async getAddress(id: string): Promise<Address> {
		const findAddress = await this.clientModel.find({ address_id: id });
		if (findAddress.length > 0) {
			const addressfound = findAddress[0].addresses.find((address) => address.address_id === id);
			return Address.create(
				{
					street: addressfound.street,
					address_number: addressfound.address_number,
					neighbornhood: addressfound.neighbornhood,
					city: addressfound.city,
					state: addressfound.state,
					zip: addressfound.zip,
					country: addressfound.country,
					complement: addressfound.complement,
					description: addressfound.description
				},
				addressfound.address_id
			);
		}
		this.notification.addError({
			message: 'address-not-found',
			context: 'CLIENT DATABASE'
		});
		throw new NotificationError(this.notification.getErrors());
	}
	async validateLegalDocuments(legalDocuments: LegalDocuments[]) {
		const documentnumberList = [];
		legalDocuments.forEach((document) => {
			documentnumberList.push(document.document_number);
		});
		const findLegalDocuments = await this.clientModel.find({
			document_number: { $all: documentnumberList }
		});
		if (findLegalDocuments.length > 0) {
			this.notification.addError({
				message: 'document-already-exists',
				context: 'CLIENT DATABASE'
			});
		}
	}
	async validateEmail(email: string) {
		const findByEmail = await this.clientModel.find({ email: email });
		if (findByEmail.length > 0) {
			this.notification.addError({
				message: 'email-already-exists',
				context: 'CLIENT DATABASE'
			});
		}
	}
	async validateClientId(clientId: string) {
		const findById = await this.clientModel.find({ client_id: clientId });
		if (findById.length > 0) {
			this.notification.addError({
				message: 'client-already-exists',
				context: 'CLIENT DATABASE'
			});
		}
	}

	sortableFields: string[];
	search(props: ClientSearchParams): Promise<ClientSearchResult> {
		throw new Error('Method not implemented.');
	}
	async insertValidate(entity: Client) {
		await this.validateClientId(entity.toJSON().client_id);
		await this.validateEmail(entity.email);
		await this.validateLegalDocuments(entity.legal_documents);
	}
	async insert(entity: Client): Promise<void> {
		const newclient = entity.toJSON();
		await this.insertValidate(entity);
		if (this.notification.hasErrors()) {
			throw new NotificationError(this.notification.getErrors());
		}
		try {
			await new this.clientModel(newclient).save();
		} catch (e) {
			this.notification.addError({
				message: 'external-error:' + e.message,
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
	async update(entity: Client): Promise<void> {
		const clientToUpdate = entity.toJSON();
		//await this.insertValidate(entity);
		if (this.notification.hasErrors()) {
			throw new NotificationError(this.notification.getErrors());
		}
		try {
			await this.clientModel.updateOne(
				{ client_id: clientToUpdate.client_id },
				{
					name: clientToUpdate.name,
					nacionality: clientToUpdate.nacionality,
					email: clientToUpdate.email,
					phone: clientToUpdate.phone,
					marital_status: clientToUpdate.marital_status,
					job_title: clientToUpdate.job_title,
					legal_documents: {
						type: clientToUpdate.legal_documents[0].type,
						document_number: clientToUpdate.legal_documents[0].document_number
					},
				}
			);
		} catch (e) {
			this.notification.addError({
				message: 'external-error:' + e.message,
				context: 'CLIENT DATABASE'
			});
			throw new NotificationError(entity.notification.getErrors());
		}
	}
	async delete(entity: Client): Promise<void> {
		const clientToDelete = entity.toJSON();
		try {
			await this.clientModel.deleteOne({ client_id: clientToDelete.client_id });
		} catch (e) {
			console.log(e);
			this.notification.addError({
				message: 'external-error:' + e.message,
				context: 'CLIENT DATABASE'
			});
			throw new NotificationError(entity.notification.getErrors());
		}
	}
	async findById(id: Uuuid): Promise<Client> {
		let foundClient: Client;
		try {
			const findClient = await this.clientModel.find({ client_id: id.id });
			findClient.forEach((client) => {
				const addresses: Address[] = [];
				client.addresses.forEach((address) => {
					return addresses.push(
						Address.create({
							street: address.street,
							zip: address.zip,
							address_number: address.address_number,
							complement: address.complement,
							description: address.description,
							city: address.city,
							state: address.state,
							country: address.city,
							neighbornhood: address.neighbornhood
						}, address.address_id)
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
				foundClient = Client.create(
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
					new Uuuid(client.client_id.toString())
				);
			});
			return foundClient;
		} catch (e) {
			this.notification.addError({
				message: 'external-error:' + e.message,
				context: 'CLIENT DATABASE'
			});
			throw new NotificationError(this.notification.getErrors());
		}
	}
	async findAll(): Promise<Client[]> {
		const clients: Client[] = [];
		try {
			const findClient = await this.clientModel.find();
			findClient.forEach((client) => {
				const addresses: Address[] = [];
				client.addresses.forEach((address) => {
					const address_id = address.address_id.toString();
					return addresses.push(
						Address.create({
							street: address.street,
							zip: address.zip,
							address_number: address.address_number,
							complement: address.complement,
							description: address.description,
							city: address.city,
							state: address.state,
							country: address.city,
							neighbornhood: address.neighbornhood
						}, address_id)
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
				clients.push(
					Client.create(
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
						new Uuuid(client.client_id.toString())
					)
				);
			});
			return clients;
		} catch (e) {
			this.notification.addError({
				message: 'external-error:' + e.message,
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
