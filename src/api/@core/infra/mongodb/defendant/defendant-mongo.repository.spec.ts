import { MongoMemoryServer } from 'mongodb-memory-server';
import { afterAll, beforeAll, describe, expect } from 'vitest';
import { DefendantMongoRepository } from './defendant-mongo.repository';
import type { ConstructorDefendantProps } from '../../../entities/defendant/defendant';
import Uuuid from '../../../entities/value-objects/uuid.vo';
import LegalDocuments, {
	documentType
} from '../../../entities/value-objects/legal-documents/legal-documents';
import Address from '../../../entities/value-objects/address/address';
import Defendant from '../../../entities/defendant/defendant';

let fakeuri: string;
let mongod: MongoMemoryServer;
let defendantRepository: DefendantMongoRepository;
const defendantMock: ConstructorDefendantProps = {
	defendant_id: new Uuuid('e6c4d38b-7f45-4acb-bed7-464cce95d745'),
	name: 'Defendant mock',
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
beforeAll(async () => {
	mongod = await MongoMemoryServer.create();
	fakeuri = mongod.getUri();
	defendantRepository = new DefendantMongoRepository(fakeuri);
});

afterAll(async () => {
	await mongod.stop();
});

describe('Create defendant', async () => {
	const newClient = Defendant.create(defendantMock);
	expect(await defendantRepository.insert(newClient)).not.throws;
});
