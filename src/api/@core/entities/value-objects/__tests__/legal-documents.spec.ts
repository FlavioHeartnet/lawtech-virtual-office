import { describe, expect, test } from 'vitest';
import LegalDocuments, { documentType } from '../legal-documents/legal-documents';

describe('Legal Documents tests', () => {
	test('Create a legal document with CPF', () => {
		const legalDocument = LegalDocuments.create({
			type: documentType.cpf,
			document_number: '284.546.300-66'
		});
		expect(legalDocument.toJSON()).toEqual({
			type: 'CPF',
			document_number: '284.546.300-66'
		});
	});
	test('Create a legal document with RG', () => {
		const legalDocument = LegalDocuments.create({
			type: documentType.rg,
			document_number: '46.814.073-6'
		});
		expect(legalDocument.toJSON()).toEqual({
			type: 'RG',
			document_number: '46.814.073-6'
		});
	});
	test('Create a legal document with CNH', () => {
		const legalDocument = LegalDocuments.create({
			type: documentType.cnh,
			document_number: '12345678901'
		});
		expect(legalDocument.toJSON()).toEqual({
			type: 'CNH',
			document_number: '12345678901'
		});
	});
	test('Create a legal document with CNPJ', () => {
		const legalDocument = LegalDocuments.create({
			type: documentType.cnpj,
			document_number: '08.283.673/0001-08'
		});
		expect(legalDocument.toJSON()).toEqual({
			type: 'CNPJ',
			document_number: '08.283.673/0001-08'
		});
	});
});
