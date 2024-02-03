import type { LawsuitOutputDto } from "../../../dto/lawsuit.dtos";
import { LawsuitMongoRepository } from "../../infra/mongodb/lawsuit/lawsuit-mongo.repository";
import type { IUseCase } from "../use-cases.interface";

export class LawsuitFindAllUseCase implements IUseCase<void, LawsuitOutputDto[]> {
    constructor(
		private readonly lawsuitRepository: LawsuitMongoRepository = new LawsuitMongoRepository()
	) {}
    async execute(): Promise<LawsuitOutputDto[]> {
        try{
            const result = await this.lawsuitRepository.findAll();
            const output: LawsuitOutputDto[] = [];
            result.forEach((lawsuit) => {
                const lawsuitJson = lawsuit.toJSON();
                const clients = lawsuitJson.clients.map((client) => { return {name: client.name, id: client.id.id}});
                const defendants = lawsuitJson.defendants.map((defendant) => { return {name: defendant.name, id: defendant.id.id}});
                output.push({
                    cnj: lawsuitJson.cnj,
                    subject: lawsuitJson.subject,
                    distributionDate: lawsuitJson.distribution_date,
                    foro: lawsuitJson.foro,
                    case_cost: lawsuitJson.case_cost,
                    fee: lawsuitJson.fee,
                    clients: clients,
                    defendants: defendants,
                    qualification: lawsuitJson.qualification,
                    vara: lawsuitJson.vara,
                });
            });
    
            return output;
        }catch(e){
            return [{ errorMessage: e.erros[0].message, cnj: '' }]
        }
        
    }
}