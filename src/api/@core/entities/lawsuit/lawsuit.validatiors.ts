import type ValidatorInterface from '../../@shared/validator/validator.interface';
import type Lawsuit from './lawsuit';

export class LawsuitValidators implements ValidatorInterface<Lawsuit>{
	constructor() {}

	public validate(entity: Lawsuit): boolean {
		if (!this.validateCnj(entity.cnj)) {
			entity.notification.addError({context: "Invalid CNJ", message: "Please provide an correct cnj"});
            return false;
		}
		return true;
	}

	private validateCnj(cnj: string) {
		const pattern = /^(\d{7})-(\d{2}\.\d{14})$/;
		return pattern.test(cnj);
	}
}
