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
					court: yup.object().shape({
						name: yup.string().required('Court name is required'),
						acronym: yup.string().required('Court acronym is required'),
						court_id: yup.number().required('Court id is required'),
						court_type: yup.string().required('Court type is required'),
						court_grade: yup.number().required('Court grade is required'),
					}),
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
