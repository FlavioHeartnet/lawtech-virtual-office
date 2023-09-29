 import { describe, expect, test } from 'vitest';
import Lawsuit from './lawsuit';
import Phase from '../value-objects/phase';
import ClassSuit from '../value-objects/lawsuit-class';
import Client from '../client/client';
import Address from '../value-objects/address';

const mockClients: Client[] = [Client.create({
    name: 'Cliente de teste',
    addresses: [
        Address.create({
            street: 'Rua de teste',
            address_number: 123,
            city: 'São Paulo',
            state: 'SP',
            zip: '01001-000',
            country: "BR",
            description: 'Endereço de teste'
        })
    ],
    email: '',
    legal_documents: [],
    phone: '',
    job_title: '',
    nacionality: '',
    marital_status: ''
})]

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
		});
		expect(lawsuit).toBeInstanceOf(Lawsuit);
	});
});
