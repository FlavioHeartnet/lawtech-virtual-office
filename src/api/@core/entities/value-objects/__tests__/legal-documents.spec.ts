import { describe, expect, test } from 'vitest';
import LegalDocuments, { documentType } from '../legal-documents/legal-documents';

describe('Legal Documents tests', () => {
	test('Create a legal document', () => {
		const legalDocument = LegalDocuments.create({
			type: documentType.cpf,
			document_number: 'XXXXXXXXXXXXXXX'
		});
		expect(legalDocument.toJSON()).toEqual({
			type: 'cpf',
			document_number: 'XXXXXXXXXXXXXXX'
		});
	});
});
