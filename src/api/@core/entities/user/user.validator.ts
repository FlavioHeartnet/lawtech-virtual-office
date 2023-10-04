import type ValidatorInterface from '../../@shared/validator/validator.interface';
import type User from './user';
import * as yup from 'yup';

export class UserValidator implements ValidatorInterface<User> {
	validate(entity: User): void {
		try {
			yup
				.object()
				.shape({
					name: yup.string().required('Name is required'),
					email: yup.string().email().required('Email is required'),
					role: yup.string().required('Role is required'),
					oab: yup.string().notRequired()
				})
				.validateSync(
					{
						name: entity.name,
						email: entity.email,
						role: entity.role,
						oab: entity.oab
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
					context: 'MOVIMENT',
					message: error
				});
			});
		}
	}
}
