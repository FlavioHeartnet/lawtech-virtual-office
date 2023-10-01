import type ValidatorInterface from '../../@shared/validator/validator.interface';
import type Defendant from './defendant';
import { DefendantValidator } from './defendant.validator';

export class DefendantValidatorFactory {
	static create(): ValidatorInterface<Defendant> {
		return new DefendantValidator();
	}
}
