import type Lawsuit from './lawsuit';

export class LawsuitValidators {
	constructor() {}

	public validate(lawsuit: Lawsuit): boolean {
		if (this.validateCnj(lawsuit.cnj)) {
			return true;
		}
		return false;
	}

	private validateCnj(cnj: string) {
		const pattern = /^(\d{7})-(\d{2}\.\d{14})$/;
		return pattern.test(cnj);
	}
}
