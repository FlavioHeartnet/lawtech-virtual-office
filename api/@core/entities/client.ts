import Address from './value-objects/address';
import LegalDocuments from './value-objects/legal-documents';

export default class Client {
	constructor(
		private _id: string,
		private _name: string,
		private _email: string,
		private _legal_documents: LegalDocuments[],
		private _phone: string,
		private _addresses: Address[],
		private _job_title: string,
		private _nacionality: string,
		private _marital_status: string
	) {}
	displayInfo() {
		return {
			id: this._id,
			name: this._name,
			email: this._email,
			legal_documents: this._legal_documents,
			phone: this._phone,
			addresses: this._addresses
		}
	}
}
