import { describe, expect, test } from 'vitest';
import Defendant from './defendant';
import LegalDocuments, { documentType } from '../value-objects/legal-documents/legal-documents';
import Address from '../value-objects/address/address';

describe('Defendant Tests', () => {
	test('Should create a defendant', () => {
		const defendant = Defendant.create({
			name: 'Defendant mock',
			email: 'XXXXXXXXXXXXXXXXXX',
			phone: 'XXXXXXXXXX',
			legal_documents: [
				LegalDocuments.create({ type: documentType.cpf, document_number: '927.308.350-16' })
			],
			addresses: [
				Address.create({
					street: 'Rua de teste',
					address_number: 123,
					city: 'São Paulo',
					state: 'SP',
					zip: '01001-000',
					country: 'BR',
					description: 'Casa de teste'
				})
			],
			job_title: 'Job title mock',
			nacionality: 'brasilian',
			marital_status: 'single'
		});

		expect(defendant.name).toBe('Defendant mock');
	});
});
