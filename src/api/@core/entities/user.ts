import Task from './task';

export default class User {
	private _tasks: Task[];
	constructor(
		private _name: string,
		private _email: string,
		private _role: string,
		private _oab?: string
	) {}
}
