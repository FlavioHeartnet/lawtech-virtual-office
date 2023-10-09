import { describe, test, expect } from 'vitest';
import { ClientMongoRepository } from './client-mongo.repository';
import Client, { type ClientConstructorProps } from '../../../entities/client/client';
import Uuuid from '../../../entities/value-objects/uuid.vo';
import LegalDocuments, {
	documentType
} from '../../../entities/value-objects/legal-documents/legal-documents';
import Address from '../../../entities/value-objects/address/address';
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
		const clientRepository = new ClientMongoRepository();
		const newClient = Client.create(clientMock);
		expect(await clientRepository.insert(newClient)).not.throws;
	});
});
