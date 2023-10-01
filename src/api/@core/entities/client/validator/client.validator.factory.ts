import type ValidatorInterface from '../../../@shared/validator/validator.interface';
import type Client from '../client';
import { ClientValidators } from './client.validator';

export class ClientValidatorFactory {
	static create(): ValidatorInterface<Client> {
		return new ClientValidators();
	}
}
