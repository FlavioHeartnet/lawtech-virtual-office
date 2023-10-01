import type ValidatorInterface from './../../../@shared/validator/validator.interface';
import type Lawsuit from './../lawsuit';
import { LawsuitValidators } from './lawsuit.validatior';

export class LawsuitValidatorFactory {
	static create(): ValidatorInterface<Lawsuit> {
		return new LawsuitValidators();
	}
}
