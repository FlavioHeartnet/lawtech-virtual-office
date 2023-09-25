import { ValueObject } from "./value-object";

export enum documentType {
	cpf = 1,
	rg = 2,
	cnh = 3,
	certidao_nascimento = 4,
	certidao_casamento = 5,
	cnpj = 6
}
export type createLegalDocumentsProps = {
	type: documentType,
	document_number: string
}
export default class LegalDocuments extends ValueObject{
	constructor(public type: documentType, public document_number: string) {
		super();
	}

	static create(props: createLegalDocumentsProps) {
		return new LegalDocuments(props.type, props.document_number);
	}
}
