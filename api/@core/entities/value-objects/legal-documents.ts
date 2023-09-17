export enum documentType {
	cpf = 1,
	rg = 2,
	cnh = 3,
	certidao_nascimento = 4,
	certidao_casamento = 5
}
export default class LegalDocuments {
	constructor(public type: documentType, public document_number: string) {}
}
