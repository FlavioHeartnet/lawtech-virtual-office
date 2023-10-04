import type ValidatorInterface from '../../@shared/validator/validator.interface';
import type Event from './event';
import { EventValidator } from './event.validator';

export class EventValidatorFactory {
	static create(): ValidatorInterface<Event> {
		return new EventValidator();
	}
}
