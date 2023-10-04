import type ValidatorInterface from '../../@shared/validator/validator.interface';
import type User from './user';
import { UserValidator } from './user.validator';

export class UserValidatorFactory {
	static create(): ValidatorInterface<User> {
		return new UserValidator();
	}
}
