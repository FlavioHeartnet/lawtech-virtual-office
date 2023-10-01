import type ValidatorInterface from '../../@shared/validator/validator.interface';
import ClassSuit from '../value-objects/lawsuit-class';
import Phase from '../value-objects/phase';
import Qualification from '../value-objects/qualification';
import type Lawsuit from './lawsuit';
import * as yup from 'yup';

export class LawsuitValidators implements ValidatorInterface<Lawsuit> {
	constructor() {}

	public validate(entity: Lawsuit): void {
		if (!this.validateCnj(entity.cnj)) {
			entity.notification.addError({
				context: 'LAWSUIT',
				message: 'Please provide an correct cnj'
			});
		}

		if (!ClassSuit.validate(entity.lawsuit_class)) {
			entity.notification.addError({ context: 'LAWSUIT', message: 'Lawsuit class invalid' });
		}

		if (!Phase.validate(entity.phase)) {
			entity.notification.addError({ context: 'LAWSUIT', message: 'Phase invalid' });
		}

		if (!Qualification.validate(entity.qualification)) {
			entity.notification.addError({ context: 'LAWSUIT', message: 'Qualification invalid' });
		}

		this.yupVelidator(entity);
	}

	private yupVelidator(entity: Lawsuit) {
		try {
			yup
				.object()
				.shape({
					subject: yup.string().required('subject is required').max(255),
					distribution_date: yup.date().required('distribution_date is required'),
					phase: yup.string().required('phase is required'),
					foro: yup.string().required('foro is required').max(255),
					vara: yup.string().required('vara is required').max(255),
					clients: yup.array().required('Client is required').min(1),
					defendant: yup.array().required('Defendant is required').min(1),
					qualification: yup.string().required('qualification is required'),
					case_cost: yup.number().min(0),
					fee: yup.number().min(0)
				})
				.validateSync(
					{
						subject: entity.subject,
						distribution_date: entity.distribution_date,
						phase: entity.phase,
						foro: entity.foro,
						vara: entity.vara,
						clients: entity.clients,
						defendant: entity.defendant,
						qualification: entity.qualification,
						case_cost: entity.case_cost,
						fee: entity.fee
					},
					{
						abortEarly: false
					}
				);
		} catch (errors) {
			const e = errors as yup.ValidationError;
			e.errors.forEach((error) => {
				entity.notification.addError({
					context: 'LAWSUIT',
					message: error
				});
			});
		}
	}

	private validateCnj(cnj: string) {
		const pattern = /^(\d{7})-(\d{2}\.\d{14})$/;
		return pattern.test(cnj);
	}
}
