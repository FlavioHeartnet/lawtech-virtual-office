import type { LawsuitClassDto } from '../../../dto/lawsuit.dtos';
import ClassSuit from '../../entities/value-objects/lawsuit-class';
import type { IUseCaseGet } from '../use-cases.interface';

export class GetLawsuitClass implements IUseCaseGet<LawsuitClassDto[]> {
	execute(): Promise<LawsuitClassDto[]> {
		return Promise.resolve([
			{
				class: ClassSuit.ADMINISTRATIVE_SUIT
			},
			{
				class: ClassSuit.ADVANCE_PRODUCTION_OF_PROOF
			},
			{
				class: ClassSuit.BANKRUPTCY
			},
			{
				class: ClassSuit.CHALLENGE_TO_COMPLIANCE_WITH_SENTENCE
			},
			{
				class: ClassSuit.CIVIL_APPEAL
			},
			{
				class: ClassSuit.COMMON_CIVIL_PROCEDURE
			},
			{
				class: ClassSuit.COMMON_LISTING
			},
			{
				class: ClassSuit.CREDIT_QUALIFICATION
			},
			{
				class: ClassSuit.CRIMINAL_ACTION
			},
			{
				class: ClassSuit.DECONVICTION_INCIDENT
			},
			{
				class: ClassSuit.DIVORCE
			},
			{
				class: ClassSuit.EVICTION
			},
			{
				class: ClassSuit.EXECUTION_EMBARGOES
			},
			{
				class: ClassSuit.EXECUTION_EXTRAJUDICIAL_EXECUTIVE_TITLE
			},
			{
				class: ClassSuit.EXECUTION_OF_SENTENCE
			},
			{
				class: ClassSuit.FOOD
			},
			{
				class: ClassSuit.GUARD_AND_FAMILY
			},
			{
				class: ClassSuit.IMMISSION_IN_POSSESSION
			},
			{
				class: ClassSuit.INSTRUMENT_APPEAL
			},
			{
				class: ClassSuit.INVENTORY
			},
			{
				class: ClassSuit.JUDICIAL_USUCAPTION
			},
			{
				class: ClassSuit.LABOR_COMPLAINT
			},
			{
				class: ClassSuit.MONITORING
			},
			{
				class: ClassSuit.POLICE_INVESTIGATION
			},
			{
				class: ClassSuit.POSSESSORY_ACTIONS
			},
			{
				class: ClassSuit.PRECAUTIONARY_PROTECTION
			},
			{
				class: ClassSuit.PROHIBITORY_INVESTIGATION
			},
			{
				class: ClassSuit.RECOGNITION_AND_TERMINATION_OF_STABLE_UNION
			},
			{
				class: ClassSuit.SPECIAL_COURT
			},
			{
				class: ClassSuit.SPECIAL_JURISDICTION
			},
			{
				class: ClassSuit.TAX_ENFORCEMENT
			},
			{
				class: ClassSuit.TESTAMENT
			},
			{
				class: ClassSuit.THIRDPARTY_EMBARGOES
			},
			{
				class: ClassSuit.URGENT_PROTECTIVE_MEASURES
			},
			{
				class: ClassSuit.VOLUNTARY_JURISDICTION
			},
			{
				class: ClassSuit.WRIT_OF_MANDAMUS
			}
		]);
	}
}
