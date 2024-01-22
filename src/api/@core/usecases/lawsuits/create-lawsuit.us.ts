// TODO: change all of the entities to have only the id as parameter and not the full entity
import type { lawsuitClient, lawsuitDefendant } from "../../../dto/lawsuit.dtos";
import type LawsuitDto from "../../../dto/lawsuit.dtos";
import Client from "../../entities/client/client";
import Lawsuit from "../../entities/lawsuit/lawsuit";
import Uuuid from "../../entities/value-objects/uuid.vo";
import { LawsuitMongoRepository } from "../../infra/mongodb/lawsuit/lawsuit-mongo.repository";
import type { IUseCase } from "../use-cases.interface";

export class LawsuitCreateUseCase implements IUseCase<LawsuitDto, boolean>{

    constructor(
		private readonly lawsuitRepository: LawsuitMongoRepository = new LawsuitMongoRepository()
	) {}

    execute(input: LawsuitDto): Promise<boolean> {
        this.lawsuitRepository.insert(new Lawsuit(
            {
                cnj: input.cnj,
                subject: input.subject,
                distributionDate: input.distributionDate,
                foro: input.foro,
                vara: input.vara,
                clients: input.clients,
                defendants: input.defendants,
                qualification: input.qualification,
                case_cost: input.case_cost,
                fee: input.fee,

            }
        ));
    }
    
}