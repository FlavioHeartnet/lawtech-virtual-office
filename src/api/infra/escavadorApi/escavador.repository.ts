export interface IEscavadorApi {
	getSuitsbyOab(oab: string): Promise<any>;
	getSuitbyCnj(cnj: string): Promise<any>;
	getMovimentsByCnj(cnj: string): Promise<any>;
	getSuitsByDocuments(documents: string): Promise<any>;
}

export class EscavadorAPI implements IEscavadorApi {
	constructor() {}
	getSuitsByDocuments(documents: string): Promise<any> {
		throw new Error('Method not implemented.');
	}
	getSuitbyCnj(cnj: string): Promise<any> {
		throw new Error('Method not implemented.');
	}
	getMovimentsByCnj(cnj: string): Promise<any> {
		throw new Error('Method not implemented.');
	}
	async getSuitsbyOab(oab: string): Promise<any> {
		throw new Error('Method not implemented.');
	}
}
