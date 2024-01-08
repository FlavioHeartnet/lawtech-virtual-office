export default class LawsuitDto {
	cnj: string;
	subject:string;
	distributionDate: Date; 
	foro:string;
	vara: string;
	clients: [];
	defendants: [];
	qualification: string;
	case_cost: number;
	fee:number;
}

export class LawsuitOutputDto{
	cnj: string;
	subject:string;
	distributionDate: Date; 
	foro:string;
	vara: string;
	clients: [];
	defendants: [];
	qualification: string;
	case_cost: number;
	fee:number;
}
