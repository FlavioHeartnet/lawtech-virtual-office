import NotificationError from '../../../@shared/notification/notification.error';
import { ValueObject } from '../value-object';
import { validateCNPJ } from './cnpj.validator';

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
		if (this.document_number === '') {
			this.notification.addError({
				context: 'LEGAL DOCUMENTS',
				message: 'Document number is required'
			});
		}
		switch (this.type) {
			case documentType.cpf:
				this.validateCPF(this.document_number);
				break;
			case documentType.cnh:
			case documentType.rg:
			case documentType.certidao_nascimento:
			case documentType.certidao_casamento:
				return true;
			case documentType.cnpj:
				if (!validateCNPJ(this.document_number)) {
					this.notification.addError({
						context: 'LEGAL DOCUMENTS',
						message: 'Invalid CNPJ'
					});
				}
				break;
			default:
				return false;
		}
	}

	protected validateCPF(cpf: string) {
		const regex = /^(?:(\d)\1{10})$|(\D)|^(\d{12,})$|^(\d{0,10})$/g;
		if (!regex.test(cpf)) {
			this.notification.addError({
				context: 'LEGAL DOCUMENTS',
				message: 'Invalid CPF'
			});
		}
	}
}
