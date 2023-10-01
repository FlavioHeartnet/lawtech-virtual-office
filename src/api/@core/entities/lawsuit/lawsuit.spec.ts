import { describe, expect, test } from 'vitest';
import Lawsuit from './lawsuit';
import Phase from '../value-objects/phase';
import ClassSuit from '../value-objects/lawsuit-class';
import Client from '../client/client';
import Address from '../value-objects/address';
import Defendant from '../defendant';
import User from '../user';

const mockClients: Client[] = [
	Client.create({
		name: 'Cliente de teste',
		addresses: [
			Address.create({
				street: 'Rua de teste',
				address_number: 123,
				city: 'São Paulo',
				state: 'SP',
				zip: '01001-000',
				country: 'BR',
				description: 'Endereço de teste'
			})
		],
		email: 'xxxxxx',
		legal_documents: [],
		phone: 'xxxxxxx',
		job_title: 'xxxxx',
		nacionality: 'xxxxxx',
		marital_status: 'xxxxxx'
	})
];

const mockdefendant: Defendant[] = [
	Defendant.create({
		name: 'Reclamante de teste',
		addresses: [
			Address.create({
				street: 'Rua de teste',
				address_number: 123,
				city: 'São Paulo',
				state: 'SP',
				zip: '01001-000',
				country: 'BR',
				description: 'Endereço de teste'
			})
		],
		email: '',
		legal_documents: [],
		phone: '',
		job_title: '',
		nacionality: '',
		marital_status: ''
	})
];

const systemUser: User = User.create({
	name: 'System User',
	email: 'XXXXXXXXXXXXXXX',
	role: 'System'
});

describe('lawsuit tests', () => {
	test('create a lawsuit', () => {
		const lawsuit = Lawsuit.create({
			cnj: '5019600-46.20000000000064',
			phase: Phase.ACKNOWLEDGE,
			subject: 'Alimenticio',
			lawsuit_class: ClassSuit.ADMINISTRATIVE_SUIT,
			distribution_date: new Date(),
			foro: 'Foro de teste',
			vara: 'Vara de teste',
			clients: mockClients,
			qualification: 'Autor',
			defendants: mockdefendant,
			responsible: systemUser
		});
		expect(lawsuit).toBeInstanceOf(Lawsuit);
	});
});
