import type TaskStatus from './value-objects/task-status';
import type Lawsuit from './lawsuit';
import type Client from './client/client';
import type TaskType from './value-objects/task-type';
import type User from './user';

export enum Priority {
	LOW = 1,
	MEDIUM = 2,
	HIGH = 3,
	URGENT = 4
}

export default class Task {
	constructor(
		public id: string,
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
	) {}
}
