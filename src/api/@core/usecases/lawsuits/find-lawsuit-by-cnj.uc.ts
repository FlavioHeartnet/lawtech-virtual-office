import { LawsuitOutputDto } from "../../../dto/lawsuit.dtos";
import { LawsuitMongoRepository } from "../../infra/mongodb/lawsuit/lawsuit-mongo.repository";
import { IUseCase } from "../use-cases.interface";

export class FindLawsuitByCnjUseCase implements IUseCase<string, LawsuitOutputDto>{
    constructor(
		private readonly lawsuitRepository: LawsuitMongoRepository = new LawsuitMongoRepository()
	) {}
    async execute(input: string): Promise<LawsuitOutputDto> {
        const resp = await this.lawsuitRepository.findByCnj(input);
        const lawsuit = resp.toJSON();
        return {
            cnj: lawsuit.cnj,
            case_cost: lawsuit.case_cost,
            distributionDate: lawsuit.distribution_date,
            fee: lawsuit.fee,
            foro: lawsuit.foro,
            qualification: lawsuit.qualification,
            subject: lawsuit.subject,
            vara: lawsuit.vara,
            class_suit: lawsuit.class_suit,
            clients: lawsuit.clients.map(client => {
                const json = client.toJSON();
                return {
                    id: json.client_id,
                    name: json.name,
                }
            }),
            defendants: lawsuit.clients.map(client => {
                const json = client.toJSON();
                return {
                    id: json.client_id,
                    name: json.name,
                }
            }),

        }
    }
}