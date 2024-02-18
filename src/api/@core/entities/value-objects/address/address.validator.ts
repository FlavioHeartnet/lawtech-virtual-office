import type ValidatorInterface from '../../../@shared/validator/validator.interface';
import type Address from './address';
import * as yup from 'yup';

export class AddressValidator implements ValidatorInterface<Address> {
	validate(entity: Address): void {
		try {
			yup
				.object()
				.shape({
					street: yup.string().required('Street is required').max(255),
					address_number: yup.number().required('Address number is required'),
					city: yup.string().required('City is required').max(255),
					state: yup.string().required('State is required').max(255),
					country: yup.string().required('Country is required').max(255),
					zip_code: yup.string().required('Zip code is required').max(255),
					description: yup.string().required('Description is required').max(255),
					complement: yup.string().max(255),
					neighbornhood: yup.string().required('Neighbornhood is required').max(255)
				})
				.validateSync(
					{
						street: entity.street,
						address_number: entity.address_number,
						city: entity.city,
						state: entity.state,
						country: entity.country,
						zip_code: entity.zip,
						description: entity.description,
						complement: entity.complement,
						neighbornhood: entity.neighborhood
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
					context: 'ADDRESS',
					message: error
				});
			});
		}
	}
}
