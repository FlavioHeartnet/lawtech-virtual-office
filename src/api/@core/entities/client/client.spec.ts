import { describe, expect, test } from 'vitest';
import type { ClientConstructorProps } from './client';
import Client from './client';
import Uuuid from '../value-objects/uuid.vo';
import Address from '../value-objects/address/address';
import LegalDocuments, { documentType } from '../value-objects/legal-documents/legal-documents';
//Arrange Act Assert
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
			complement: '',
			neighbornhood: 'Corr'
		})
	],
	job_title: 'XXXXX',
	nacionality: 'XXXXXX',
	marital_status: 'XXXXXX'
};
const createdclient = Client.create(
	{
		addresses: clientMock.addresses,
		email: clientMock.email,
		legal_documents: clientMock.legal_documents,
		job_title: clientMock.job_title,
		marital_status: clientMock.marital_status,
		name: clientMock.name,
		phone: clientMock.phone,
		nacionality: clientMock.nacionality
	},
	clientMock.client_id
);
describe('Tests for Client entity', () => {
	test('should create a client', () => {
		const client = new Client(clientMock);
		expect(client.toJSON().client_id).toStrictEqual(clientMock.client_id.id);
	});

	test("Change the client's name", () => {
		createdclient.changeName('Jose');
		expect(createdclient.toJSON().name).toBe('Jose');
	});
	test("Change the client's email", () => {
		createdclient.changeEmail('XXXXXXXXXXXXXX');
		expect(createdclient.toJSON().email).toBe('XXXXXXXXXXXXXX');
	});
	test("Change the client's phone", () => {
		createdclient.changePhone('XXXXXXXXXXXXXX');
		expect(createdclient.toJSON().phone).toBe('XXXXXXXXXXXXXX');
	});
});
