import Entity from '../../@shared/entity/entity.abstract';
import NotificationError from '../../@shared/notification/notification.error';
import type Address from '../value-objects/address';
import type LegalDocuments from '../value-objects/legal-documents';
import Uuuid from '../value-objects/uuid.vo';
import { ClientValidatorFactory } from './client.validator.factory';

export type CreateClientProps = {
	name: string;
	email: string;
	legal_documents: LegalDocuments[];
	phone: string;
	addresses: Address[];
	job_title: string;
	nacionality: string;
	marital_status: string;
};

export type ClientConstructorProps = {
	client_id: Uuuid;
	name: string;
	email: string;
	legal_documents: LegalDocuments[];
	phone: string;
	addresses: Address[];
	job_title: string;
	nacionality: string;
	marital_status: string;
};

export default class Client extends Entity {
	private _client_id: Uuuid;
	private _name: string;
	private _email: string;
	private _legal_documents: LegalDocuments[];
	private _phone: string;
	private _addresses: Address[];
	private _job_title: string;
	private _nacionality: string;
	private _marital_status: string;
	constructor(props: ClientConstructorProps) {
		super();
		this._client_id = props.client_id;
		this._name = props.name;
		this._email = props.email;
		this._legal_documents = props.legal_documents;
		this._phone = props.phone;
		this._addresses = props.addresses;
		this._job_title = props.job_title;
		this._nacionality = props.nacionality;
		this._marital_status = props.marital_status;
		this.validate();
		if (this.notification.hasErrors()) {
			throw new NotificationError(this.notification.getErrors());
		}
	}
	private validate(): void {
		ClientValidatorFactory.create().validate(this);
	}
	static create(props: CreateClientProps, id?: Uuuid) {
		return new Client({ client_id: id || new Uuuid(), ...props });
	}

	get name(): string {
		return this._name;
	}

	get email(): string {
		return this._email;
	}

	get phone(): string {
		return this._phone;
	}

	get legal_documents(): LegalDocuments[] {
		return this._legal_documents;
	}

	get job_title(): string {
		return this._job_title;
	}

	get marital_status(): string {
		return this._marital_status;
	}
	get nacionality(): string {
		return this._nacionality;
	}

	changeName(name: string) {
		this._name = name;
	}
	changeEmail(email: string) {
		this._email = email;
	}
	changeLegalDocuments(legal_documents: LegalDocuments[]) {
		this._legal_documents = legal_documents;
	}
	changePhone(phone: string) {
		this._phone = phone;
	}
	changeAddresses(addresses: Address[]) {
		this._addresses = addresses;
	}
	changeJobTitle(job_title: string) {
		this._job_title = job_title;
	}
	changeNacionality(nacionality: string) {
		this._nacionality = nacionality;
	}
	changeMaritalStatus(marital_status: string) {
		this._marital_status = marital_status;
	}

	toJSON() {
		return {
			client_id: this._client_id.id,
			name: this._name,
			email: this._email,
			legal_documents: this._legal_documents,
			phone: this._phone,
			addresses: this._addresses,
			job_title: this._job_title,
			nacionality: this._nacionality,
			marital_status: this._marital_status
		};
	}
}
