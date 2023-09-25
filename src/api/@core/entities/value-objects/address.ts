import Uuuid from './uuid.vo';
import { ValueObject } from './value-object';

export type createAddressProps = {
	street: string;
	address_number: number;
	city: string;
	state: string;
	zip: string;
	country: string;
	description: string;
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
		public description: string
	) {
		super();
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
			props.description
		);
	}

	public displayAddress(): string {
		return `Rua ${this.street}, ${this.city}, ${this.state}, ${this.zip}, ${this.country}`;
	}
}
