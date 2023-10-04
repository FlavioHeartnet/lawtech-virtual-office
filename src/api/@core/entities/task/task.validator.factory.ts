import type ValidatorInterface from '../../@shared/validator/validator.interface';
import type Task from './task';
import { TaskValidator } from './task.validator';

export class TaskValidatorFactory {
	static create(): ValidatorInterface<Task> {
		return new TaskValidator();
	}
}
