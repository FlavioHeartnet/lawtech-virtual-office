import { describe, expect, test } from 'vitest';
import type { ClientConstructorProps } from './client';
import Client from './client';
//Arrange Act Assert
describe('Tests for Client entity', () => {
	test('should create a client', () => {
		const clientMock: ClientConstructorProps = {
			client_id: '1',
			name: 'Client mock',
			email: 'XXXXXXXXXXXXXXX',
			phone: 'XXXXXXXXXXXXXXX',
			legal_documents: [
				{
					type: 1,
					document_number: 'XXXXXX'
				}
			],
			addresses: [
				{
					street: 'Rua XXXXXX',
					city: 'XXXXXX',
					state: 'XXXXXX',
					country: 'XXXXXX',
					zip: 'XXXXXX',
					description: 'XXXXXX'
				}
			],
			job_title: 'XXXXXX',
			nacionality: 'XXXXXX',
			marital_status: 'XXXXXX'
		};
		const client = new Client(clientMock);
		expect(client.toJSON()).toStrictEqual(clientMock);
	});
});
