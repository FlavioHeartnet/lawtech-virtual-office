import NotificationError from '../../../@shared/notification/notification.error';
import { ValueObject } from '../value-object';

export enum documentType {
	cpf = 1,
	rg = 2,
	cnh = 3,
	certidao_nascimento = 4,
	certidao_casamento = 5,
	cnpj = 6
}
export type createLegalDocumentsProps = {
	type: documentType;
	document_number: string;
};
export default class LegalDocuments extends ValueObject {
	constructor(public type: documentType, public document_number: string) {
		super();
		this.validate();
		if (this.notification.hasErrors()) {
			throw new NotificationError(this.notification.getErrors());
		}
	}

	static create(props: createLegalDocumentsProps) {
		return new LegalDocuments(props.type, props.document_number);
	}

	toJSON() {
		return {
			type: this.printDocumentType(this.type),
			document_number: this.document_number
		};
	}

	printDocumentType(type: documentType) {
		switch (type) {
			case documentType.cpf:
				return 'CPF';
			case documentType.rg:
				return 'RG';
			case documentType.cnh:
				return 'CNH';
			case documentType.certidao_nascimento:
				return 'Certidão de Nascimento';
			case documentType.certidao_casamento:
				return 'Certidão de Casamento';
			case documentType.cnpj:
				return 'CNPJ';
			default:
				return 'Documento inválido';
		}
	}

	private validate() {
		switch (this.type) {
			case documentType.cpf:
				this.validateCPF(this.document_number);
				this.notification.addError({
					context: 'LEGAL DOCUMENTS',
					message: 'Invalid CPF'
				});
			case documentType.rg:
				return true;
			case documentType.cnh:
				return true;
			case documentType.certidao_nascimento:
				return true;
			case documentType.certidao_casamento:
				return true;
			case documentType.cnpj:
				return true;
			default:
				return false;
		}
	}

	protected validateCPF(cpf: string): boolean {
		cpf = cpf.replace(/[^\d]+/g, '');

		if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
			return false;
		}

		let sum = 0;
		for (let i = 0; i < 9; i++) {
			sum += parseInt(cpf.charAt(i)) * (10 - i);
		}

		const remainder = sum % 11;
		const checkDigit1 = remainder < 2 ? 0 : 11 - remainder;

		if (parseInt(cpf.charAt(9)) !== checkDigit1) {
			return false;
		}

		sum = 0;
		for (let i = 0; i < 10; i++) {
			sum += parseInt(cpf.charAt(i)) * (11 - i);
		}

		const checkDigit2 = sum % 11 < 2 ? 0 : 11 - (sum % 11);

		return parseInt(cpf.charAt(10)) === checkDigit2;
	}
}
