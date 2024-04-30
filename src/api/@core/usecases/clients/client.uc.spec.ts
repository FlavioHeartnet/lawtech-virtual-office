import { describe, test, expect, vi, beforeAll, afterEach } from 'vitest';
import CreateClient from './create-client.uc';
import { ClientMongoRepository } from '../../infra/mongodb/client/client-mongo.repository';
import type { CreateManyDTO } from '../../../dto/client.dtos';
import { CreateManyUseCase } from './create-many-clients.uc';
import { MongoMemoryServer } from 'mongodb-memory-server';
let fakeuri: string;
let mongod: MongoMemoryServer;
beforeAll(async () => {
	mongod = await MongoMemoryServer.create();
	fakeuri = mongod.getUri();
});
afterEach(async () => {
	await mongod.stop();
});
describe('Tests for Client use cases', () => {
	test('Should create a client', async () => {
		const mockRepository = new ClientMongoRepository(fakeuri);
		vi.spyOn(mockRepository, 'insert').mockImplementation(() => Promise.resolve());
		const newClient = await new CreateClient(mockRepository).execute({
			name: 'John Doe',
			email: 'teste@teste',
			addresses: [
				{
					street: 'Rua teste',
					address_number: 123,
					city: 'São Paulo',
					state: 'SP',
					country: 'Brazil',
					zip: '09876543',
					complement: 'Casa',
					description: 'Casa teste',
					neighbornhood: 'Corrego'
				}
			],
			phone: 'XXXXXXXXXXXXXXX',
			job_title: 'Developer',
			nacionality: 'Brazilian',
			marital_status: 'Single',
			legal_documents: [{ type: 1, document: '640.273.300-80' }]
		});

		expect(newClient.id).toBeDefined();
	});

	test('Insert a list of clients in bulk', async () => {
		const mockRepository = new ClientMongoRepository();
		vi.spyOn(mockRepository, 'bulkInsert').mockImplementation(() => Promise.resolve());
		const newClients: CreateManyDTO = {
			clients: [
				{
					name: 'John Doe',
					email: 'teste@teste',
					addresses: [
						{
							street: 'Rua teste',
							address_number: 123,
							city: 'São Paulo',
							state: 'SP',
							country: 'Brazil',
							zip: '09876543',
							complement: 'Casa',
							description: 'Casa teste',
							neighbornhood: 'Corrego'
						}
					],
					phone: 'XXXXXXXXXXXXXXX',
					job_title: 'Developer',
					nacionality: 'Brazilian',
					marital_status: 'Single',
					legal_documents: [{ type: 1, document: '640.273.300-80' }]
				},
				{
					name: 'John Doe',
					email: 'teste1@teste',
					addresses: [
						{
							street: 'Rua teste',
							address_number: 123,
							city: 'São Paulo',
							state: 'SP',
							country: 'Brazil',
							zip: '09876543',
							complement: 'Casa',
							description: 'Casa teste',
							neighbornhood: 'Corrego'
						}
					],
					phone: 'XXXXXXXXXXXXXXX',
					job_title: 'Developer',
					nacionality: 'Brazilian',
					marital_status: 'Single',
					legal_documents: [{ type: 1, document: '640.273.300-80' }]
				}
			]
		};

		const result = await new CreateManyUseCase(mockRepository).execute(newClients);

		expect(result.clients).toBeDefined();
	});
});
