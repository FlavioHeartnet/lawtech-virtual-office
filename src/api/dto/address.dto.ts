export class CreateAddressDTO {
	street: string;
	address_number: number;
	complement: string;
	state: string;
	city: string;
	zip: string;
	country: string;
	neighbornhood: string;
	description: string;
}

export class FindAddressDTO {
	id: string;
	address:string;
	street: string;
	address_number: number;
	complement: string;
	state: string;
	city: string;
	zip: string;
	country: string;
	neighbornhood: string;
	description: string;
}

export class UpdateAddressDTO extends CreateAddressDTO {
	id: string;
	client_id: string;
}
