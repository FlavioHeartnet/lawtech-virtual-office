import Entity from '../../@shared/entity/entity.abstract';
import NotificationError from '../../@shared/notification/notification.error';
import type Address from '../value-objects/address/address';
import type LegalDocuments from '../value-objects/legal-documents/legal-documents';
import Uuuid from '../value-objects/uuid.vo';
import { DefendantValidatorFactory } from './defendant.validator.factory';

export type ConstructorDefendantProps = {
	defendant_id?: Uuuid;
	name: string;
	email: string;
	legal_documents: LegalDocuments[];
	phone: string;
	addresses: Address[];
	job_title: string;
	nacionality: string;
	marital_status: string;
};

export default class Defendant extends Entity {
	private _name: string;
	private _email: string;
	private _legal_documents: LegalDocuments[];
	private _phone: string;
	private _addresses: Address[];
	private _job_title: string;
	private _nacionality: string;
	private _marital_status: string;
	constructor(props: ConstructorDefendantProps) {
		super();
		this._id = props.defendant_id || new Uuuid();
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

	private validate() {
		DefendantValidatorFactory.create().validate(this);
	}
	static create(props: ConstructorDefendantProps, id?: Uuuid) {
		return new Defendant({ ...props, defendant_id: id });
	}

	get name(): string {
		return this._name;
	}

	get email(): string {
		return this._email;
	}

	get legal_documents(): LegalDocuments[] {
		return this._legal_documents;
	}

	get phone(): string {
		return this._phone;
	}

	get addresses(): Address[] {
		return this._addresses;
	}

	get job_title(): string {
		return this._job_title;
	}

	get nacionality(): string {
		return this._nacionality;
	}

	get marital_status(): string {
		return this._marital_status;
	}

	toJSON() {
		return {
			id: this._id.id,
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
