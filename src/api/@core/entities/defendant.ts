import type Address from './value-objects/address';
import type LegalDocuments from './value-objects/legal-documents';

export default class Defendant {
	constructor(
		private _client_id: string,
		private _name: string,
		private _email: string,
		private _legal_documents: LegalDocuments[],
		private _phone: string,
		private _addresses: Address[],
		private _job_title: string,
		private _nacionality: string,
		private _marital_status: string
	) {}

	toJSON() {
		return {
			id: this._client_id,
			name: this._name,
			email: this._email,
			legal_documents: this._legal_documents,
			phone: this._phone,
			addresses: this._addresses,
			job_title: this._job_title,
			nacionality: this._nacionality,
			marital_status: this._marital_status
		
		}
	}
}
