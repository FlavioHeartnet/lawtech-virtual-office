import { validate } from 'uuid';
import Entity from '../../@shared/entity/entity.abstract';
import Uuuid from '../value-objects/uuid.vo';
import NotificationError from '../../@shared/notification/notification.error';
import { UserValidatorFactory } from './user.validator.factory';

export type ConstructorUserProps = {
	id?: Uuuid;
	name: string;
	email: string;
	role: string;
	oab?: string;
};

export default class User extends Entity {
	private _name: string;
	private _email: string;
	private _role: string;
	private _oab?: string;
	constructor(props: ConstructorUserProps) {
		super();
		this._id = props.id || new Uuuid();
		this._name = props.name;
		this._email = props.email;
		this._role = props.role;
		this._oab = props.oab;
		this.validate();
		if (this.notification.hasErrors()) {
			throw new NotificationError(this.notification.getErrors());
		}
	}
	validate() {
		UserValidatorFactory.create().validate(this);
	}

	static create(props: ConstructorUserProps) {
		return new User(props);
	}

	get name(): string {
		return this._name;
	}

	get email(): string {
		return this._email;
	}

	get role(): string {
		return this._role;
	}

	get oab(): string {
		return this._oab || '';
	}

	changeName(name: string) {
		this._name = name;
	}
	changeEmail(email: string) {
		return (this._email = email);
	}
	changeRole(role: string) {
		return (this._role = role);
	}
	changeOab(oab: string) {
		return (this._oab = oab);
	}

	toJSON() {
		return {
			id: this.id.id,
			name: this.name,
			email: this.email,
			role: this.role,
			oab: this.oab
		};
	}
}
