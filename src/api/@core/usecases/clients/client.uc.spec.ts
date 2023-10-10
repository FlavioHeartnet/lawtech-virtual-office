import { describe, test, expect, vi } from 'vitest';
import CreateClient from './create-client.uc';
import { ClientMongoRepository } from '../../infra/mongodb/client/client-mongo.repository';

describe('Tests for Client use cases', () => {
	test('Should create a client', async () => {
		const mockRepository = new ClientMongoRepository();
		vi.spyOn(mockRepository, 'insert').mockImplementation(() => Promise.resolve());
		const newClient = await new CreateClient(mockRepository).execute({
			name: 'John Doe',
			email: 'teste@teste',
			addresses: [
				{
					street: 'Rua teste',
					number: 123,
					city: 'São Paulo',
					state: 'SP',
					country: 'Brazil',
					zipCode: '09876543',
					complement: 'Casa',
					description: 'Casa teste'
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
});
