import type { LawsuitqualificationDto } from '../../../dto/lawsuit.dtos';
import Qualification from '../../entities/value-objects/qualification';
import type { IUseCaseGet } from '../use-cases.interface';

export class GetLawsuitQualifications implements IUseCaseGet<LawsuitqualificationDto[]> {
	execute(): Promise<LawsuitqualificationDto[]> {
		return Promise.resolve([
			{
				qualification: Qualification.QUALIFICATION_APPEALED
			},
			{
				qualification: Qualification.QUALIFICATION_AUTHOR
			},
			{
				qualification: Qualification.QUALIFICATION_DEFENDANT
			},
			{
				qualification: Qualification.QUALIFICATION_DISPUTE
			},
			{
				qualification: Qualification.QUALIFICATION_EMBARGOED
			},
			{
				qualification: Qualification.QUALIFICATION_EMBARGOER
			},
			{
				qualification: Qualification.QUALIFICATION_EXECUTED
			},
			{
				qualification: Qualification.QUALIFICATION_EXECUTOR
			},
			{
				qualification: Qualification.QUALIFICATION_RECURRING
			}
		]);
	}
}
