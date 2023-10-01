import type ValidatorInterface from "../../@shared/validator/validator.interface";
import type Task from "./task";
import * as yup from "yup";


export class TaskValidator implements ValidatorInterface<Task>{
    validate(entity: Task): void {
        try {
			yup
				.object()
				.shape({
					title: yup.string().required('Title is required'),
                    description: yup.string().required('Description is required'),
                    status: yup.string().required('Status is required'),
                    deadline: yup.date().required('Deadline is required'),
                    task_type: yup.string().required('Task type is required'),
                    priority: yup.number().default(1),
                    responsible: yup.array().min(1),
				})
				.validateSync(
					{
						title: entity.title,
                        description: entity.description,
                        status: entity.status,
                        deadline: entity.deadline,
                        task_type: entity.task_type,
                        priority: entity.priority,
                        responsible: entity.responsible,
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
					context: 'TASK',
					message: error
				});
			});
		}
    }
}