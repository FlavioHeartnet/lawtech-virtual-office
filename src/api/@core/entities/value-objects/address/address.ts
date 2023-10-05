import NotificationError from '../../../@shared/notification/notification.error';
import Uuuid from '../uuid.vo';
import { ValueObject } from '../value-object';
import { AddressValidatorFactory } from './address.validator.factory';

export type createAddressProps = {
	street: string;
	address_number: number;
	city: string;
	state: string;
	zip: string;
	country: string;
	description: string;
	complement: string;
};
export default class Address extends ValueObject {
	constructor(
		public address_id: Uuuid,
		public street: string,
		public address_number: number,
		public city: string,
		public state: string,
		public zip: string,
		public country: string,
		public description: string,
		public complement: string
	) {
		super();
		this.validate();
		if (this.notification.hasErrors()) {
			throw new NotificationError(this.notification.getErrors());
		}
	}
	validate() {
		AddressValidatorFactory.create().validate(this);
	}

	static create(props: createAddressProps, id?: string) {
		return new Address(
			new Uuuid(id),
			props.street,
			props.address_number,
			props.city,
			props.state,
			props.zip,
			props.country,
			props.description,
			props.complement
		);
	}

	public displayAddress(): string {
		return `Rua ${this.street}, ${this.city}, ${this.state}, ${this.zip}, ${this.country}`;
	}
}
