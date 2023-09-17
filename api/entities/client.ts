import Address from './value-objects/address';
import LegalDocuments from './value-objects/legal-documents';

export default class Client {
	constructor(
		private _name: string,
		private _email: string,
		private _legal_documents: LegalDocuments[],
		private _phone: string,
		private _addresses: Address[]
	) {}
}
