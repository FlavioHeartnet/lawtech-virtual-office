import type ValidatorInterface from '../../../@shared/validator/validator.interface';
import type Address from './address';
import { AddressValidator } from './address.validator';

export class AddressValidatorFactory {
	static create(): ValidatorInterface<Address> {
		return new AddressValidator();
	}
}
