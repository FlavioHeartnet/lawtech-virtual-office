export default class LawsuitDto {
	cnj: string;
	subject: string;
	distributionDate: Date;
	foro: string;
	vara: string;
	clients: lawsuitClient[];
	defendants: lawsuitDefendant[];
	qualification: string;
	case_cost: number;
	fee: number;
	responsible: string;
	class: string;
}
export type lawsuitClient = {
	name: string;
	id: string;
};
export type lawsuitDefendant = {
	name: string;
	id: string;
};
export class LawsuitOutputDto {
	cnj: string;
	subject?: string;
	distributionDate?: Date;
	foro?: string;
	vara?: string;
	clients?: lawsuitClient[];
	defendants?: lawsuitDefendant[];
	qualification?: string;
	case_cost?: number;
	fee?: number;
	class_suit:string;
	errorMessage?: string;
}

export class LawsuitClassDto {
	class: string;
}

export class LawsuitqualificationDto {
	qualification: string;
}
