import type { LawsuitOutputDto } from '../../../dto/lawsuit.dtos';
import type LawsuitDto from '../../../dto/lawsuit.dtos';
import Client from '../../entities/client/client';
import Defendant from '../../entities/defendant/defendant';
import Lawsuit from '../../entities/lawsuit/lawsuit';
import ClassSuit from '../../entities/value-objects/lawsuit-class';
import Phase from '../../entities/value-objects/phase';
import Uuuid from '../../entities/value-objects/uuid.vo';
import { LawsuitMongoRepository } from '../../infra/mongodb/lawsuit/lawsuit-mongo.repository';
import type { IUseCase } from '../use-cases.interface';

export class LawsuitCreateUseCase implements IUseCase<LawsuitDto, LawsuitOutputDto> {
	constructor(
		private readonly lawsuitRepository: LawsuitMongoRepository = new LawsuitMongoRepository()
	) {}

	async execute(input: LawsuitDto): Promise<LawsuitOutputDto> {
		const clients = input.clients.map((client) => Client.createReferenceId(client.id));
		const defendants = input.clients.map((defendant) => Defendant.createReferenceId(defendant.id));
		try {
			await this.lawsuitRepository.insert(
				new Lawsuit({
					cnj: input.cnj,
					subject: input.subject,
					distribution_date: input.distributionDate,
					foro: input.foro,
					vara: input.vara,
					clients: clients,
					defendants: defendants,
					qualification: input.qualification,
					case_cost: input.case_cost,
					fee: input.fee,
					phase: Phase.ACKNOWLEDGE,
					responsible: null,
					lawsuit_class: ClassSuit.COMMON_CIVIL_PROCEDURE,
					id: new Uuuid()
				})
			);
			return {
				cnj: input.cnj
			};
		} catch (e) {
			return { cnj: input.cnj, errorMessage: e.errors[0].message };
		}
	}
}
