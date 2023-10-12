import { describe, test, expect, beforeEach, afterEach, beforeAll, afterAll } from 'vitest';
import { ClientMongoRepository } from './client-mongo.repository';
import Client, { type ClientConstructorProps } from '../../../entities/client/client';
import Uuuid from '../../../entities/value-objects/uuid.vo';
import LegalDocuments, {
	documentType
} from '../../../entities/value-objects/legal-documents/legal-documents';
import Address from '../../../entities/value-objects/address/address';
import { MongoMemoryServer } from 'mongodb-memory-server';

let fakeuri: string;
let mongod: MongoMemoryServer;
let clientRepository: ClientMongoRepository;
beforeAll(async () => {
	mongod = await MongoMemoryServer.create();
	fakeuri = mongod.getUri();
	clientRepository = new ClientMongoRepository(fakeuri);
});

afterAll(async () => {
	await mongod.stop();
});
const clientMock: ClientConstructorProps = {
	client_id: new Uuuid('e6c4d38b-7f45-4acb-bed7-464cce95d745'),
	name: 'Client mock',
	email: 'XXXX@XXXX.com',
	phone: 'XXXXXXXXXXXXXXX',
	legal_documents: [
		LegalDocuments.create({
			type: documentType.cpf,
			document_number: '284.546.300-66'
		})
	],
	addresses: [
		Address.create({
			street: 'Rua de Teste',
			address_number: 25,
			city: 'Florianopolis',
			state: 'SC',
			country: 'Brasil',
			zip: '88030-000',
			description: 'Residencial',
			complement: ''
		})
	],
	job_title: 'XXXXX',
	nacionality: 'XXXXXX',
	marital_status: 'XXXXXX'
};
describe('mongo test for Client', () => {
	test('should be able to connect to mongo', async () => {
		const newClient = Client.create(clientMock);
		expect(await clientRepository.insert(newClient)).not.throws;
	});

	test('Should insert a existing client and throw an error', async () => {
		const newClient = Client.create(clientMock);
		await expect(() => clientRepository.insert(newClient)).rejects.toThrowError(
			'Client already exists'
		);
	});

	test('Should insert a new client with a existing email and throw an error', async () => {
		const newClient = Client.create(clientMock);
		await expect(() => clientRepository.insert(newClient)).rejects.toThrowError(
			'E-mail already exists'
		);
	});

	test('Insert many users', () => {
		const clients = [
			Client.create(clientMock),
			Client.create(clientMock),
			Client.create(clientMock)
		];
		expect(clientRepository.bulkInsert(clients)).not.throws;
	});
});
