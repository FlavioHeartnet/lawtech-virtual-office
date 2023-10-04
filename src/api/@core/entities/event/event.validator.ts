import type ValidatorInterface from '../../@shared/validator/validator.interface';
import type Event from './event';
import * as yup from 'yup';
import { eventType } from './event';

export class EventValidator implements ValidatorInterface<Event> {
	validate(entity: Event): void {
		try {
			yup
				.object()
				.shape({
					event_class: yup.string().required('Event Clared').max(255),
					date: yup.date().default(new Date()),
					duration: yup
						.date()
						.required('Duration is required')
						.default(new Date(Date.now() + 1)),
					responsible: yup.object().required('Responsible is required'),
					description: yup.string().required('Description is required').max(255),
					type: yup.string().required('Type is required').default(eventType.VIRTUAL),
					location: yup.string().default('online')
				})
				.validateSync(
					{
						event_class: entity.event_class,
						date: entity.date,
						duration: entity.duration,
						responsible: entity.responsible,
						description: entity.description,
						type: entity.type,
						location: entity.location
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
					context: 'EVENT',
					message: error
				});
			});
		}
	}
}
