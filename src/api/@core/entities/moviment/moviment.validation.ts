import { isNull } from "lodash";
import type ValidatorInterface from "../../@shared/validator/validator.interface";
import Court from "../value-objects/court";
import type Moviment from "./moviment";
import * as yup from 'yup';

export default class MovimentValidation implements ValidatorInterface<Moviment>{
  validate(entity: Moviment): void {
    try {
			yup
				.object()
				.shape({
					date: yup.date().required('Moviment date is required'),
					description: yup.string().required('Description is required'),
					court: yup.object().required('Court is required'),
				})
				.validateSync(
					{
						date: entity.date,
						description: entity.description,
						court: entity.court,
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
