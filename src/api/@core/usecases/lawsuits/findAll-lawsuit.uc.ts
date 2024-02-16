import type { LawsuitOutputDto } from '../../../dto/lawsuit.dtos';
import Uuuid from '../../entities/value-objects/uuid.vo';
import { ClientMongoRepository } from '../../infra/mongodb/client/client-mongo.repository';
import { LawsuitMongoRepository } from '../../infra/mongodb/lawsuit/lawsuit-mongo.repository';
import type { IUseCase } from '../use-cases.interface';

export class LawsuitFindAllUseCase implements IUseCase<void, LawsuitOutputDto[]> {
	constructor(
		private readonly lawsuitRepository: LawsuitMongoRepository = new LawsuitMongoRepository()
	) {}
	async execute(): Promise<LawsuitOutputDto[]> {
		try {
			const result = await this.lawsuitRepository.findAll();
			const output: LawsuitOutputDto[] = await Promise.all(result.map(async (lawsuit) => {
				const lawsuitJson = lawsuit.toJSON();
				const clients = await Promise.all(lawsuitJson.clients.map(async (client) => {
					const findclient = await new ClientMongoRepository().findById(
						new Uuuid(client.toJSON().client_id)
					);
					if (findclient) {
						return { name: findclient.name, id: client.id.id };
					}
				}));
			
				const defendants = await Promise.all(lawsuitJson.defendants.map(async (defendant) => {
					const findclient = await new ClientMongoRepository().findById(defendant.id);
					if (findclient) {
						return { name: findclient.name, id: defendant.id.id };
					}
				}));
				return {
					cnj: lawsuitJson.cnj,
					subject: lawsuitJson.subject,
					distributionDate: lawsuitJson.distribution_date,
					foro: lawsuitJson.foro,
					case_cost: lawsuitJson.case_cost,
					fee: lawsuitJson.fee,
					clients: clients,
					defendants: defendants,
					qualification: lawsuitJson.qualification,
					vara: lawsuitJson.vara
				};
			}));

			return output;
		} catch (e) {
			return [{ errorMessage: e.erros[0].message, cnj: '' }];
		}
	}
}
