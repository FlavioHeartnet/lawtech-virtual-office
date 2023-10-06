import { describe, test, expect } from 'vitest';
import CreateClient from './create-client.uc';



describe('Tests for Client use cases', () => {
	test('Should create a client', async () => {
		const newClient = await new CreateClient().execute({
			name: 'John Doe',
			email: 'teste@teste',
			addresses: [{
				street: 'Rua teste',
				number: 123,
				city: 'São Paulo',
				state: 'SP',
				country: 'Brazil',
				zipCode: '09876543',
				complement: 'Casa',
				description: 'Casa teste',
			}],
			phone: 'XXXXXXXXXXXXXXX',
			job_title: 'Developer',
			nacionality: 'Brazilian',
			marital_status: 'Single',
			legal_documents: [
				{ type: 1, document: '423.247.528-16' },
			],
		});
		console.log(newClient);
		expect(newClient.id).toBeDefined();
	});
});
