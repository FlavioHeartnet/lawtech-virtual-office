import type Client from './client/client';
import type Lawsuit from './lawsuit';
import type User from './user';

export enum eventType {
	VIRTUAL = 'Virtual',
	LOCAL = 'Presencial'
}

export default class Event {
	constructor(
		private _event_class: string,
		private _date: Date,
		private _duration: Date,
		private _responsible: User,
		private _description: string,
		private _clients: Client[],
		private _lawsuit: Lawsuit,
		private _location: string,
		private _type: eventType
	) {}
}
