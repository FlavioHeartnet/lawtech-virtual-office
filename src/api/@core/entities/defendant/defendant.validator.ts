import type ValidatorInterface from '../../@shared/validator/validator.interface';
import type Defendant from './defendant';
import * as yup from 'yup';

export class DefendantValidator implements ValidatorInterface<Defendant> {
	validate(entity: Defendant): void {
		try {
			yup
				.object()
				.shape({
					name: yup.string().required('Name is required').max(255),
					email: yup.string().email().required('Email is required').max(150),
					legal_documents: yup.array().min(1),
					addresses: yup.array().min(1),
					phone: yup.string().required('Phone number is required').max(15),
					job_title: yup.string().required('Job title is required').max(100),
					nacionality: yup.string().required('Nacionality is required').max(100),
					marital_status: yup.string().required('Marital status is required').max(20)
				})
				.validateSync(
					{
						name: entity.name,
						email: entity.email,
						phone: entity.phone,
						job_title: entity.job_title,
						nacionality: entity.nacionality,
						marital_status: entity.marital_status,
						legal_documents: entity.legal_documents,
						addresses: entity.addresses
					},
					{
						abortEarly: false
					}
				);
		} catch (errors) {
			const e = errors as yup.ValidationError;
			console.log('error: ' + e);
			e.errors.forEach((error) => {
				entity.notification.addError({
					context: 'DEFENDANT',
					message: error
				});
			});
		}
	}
}
