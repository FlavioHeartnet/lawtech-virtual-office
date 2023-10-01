import type TaskStatus from '../value-objects/task-status';
import type Lawsuit from '../lawsuit/lawsuit';
import type Client from '../client/client';
import type TaskType from '../value-objects/task-type';
import type User from '../user';
import Entity from '../../@shared/entity/entity.abstract';
import type Uuuid from '../value-objects/uuid.vo';
import { TaskValidatorFactory } from './task.validator.factory';
import NotificationError from '../../@shared/notification/notification.error';

export enum Priority {
	LOW = 1,
	MEDIUM = 2,
	HIGH = 3,
	URGENT = 4
}

export type CreateTaskProps = {
	id: Uuuid;
	title: string;
	description: string;
	status: TaskStatus;
	deadline: Date;
	task_type: TaskType;
	priority: Priority;
	responsible: User[];
	created_at?: Date;
	updated_at?: Date;
	lawsuit?: Lawsuit;
	clients?: Client[];
};

export default class Task extends Entity{
	constructor(
		id: Uuuid,
		public title: string,
		public description: string,
		public status: TaskStatus,
		public deadline: Date,
		public task_type: TaskType,
		public priority: Priority,
		public responsible: User[],
		public created_at: Date,
		public updated_at: Date,
		public lawsuit?: Lawsuit,
		public clients?: Client[]
	) {
		super();
		this._id = id;
		this.validate();
		if (this.notification.hasErrors()) {
			throw new NotificationError(this.notification.getErrors());
		}
	}
	validate() {
		TaskValidatorFactory.create().validate(this);
	}
	static create(props: CreateTaskProps): Task {
		return new Task(
			props.id,
			props.title,
			props.description,
			props.status,
			props.deadline,
			props.task_type,
			props.priority,
			props.responsible,
			props.created_at || new Date(),
			props.updated_at || new Date(),
			props.lawsuit,
			props.clients
		
		);
	}

}
