import type ClassSuit from './value-objects/class-suit';
import type Client from './client/client';
import type Defendant from './defendant';
import type Event from './event';
import type Moviment from './moviment';
import type Qualification from './value-objects/qualification';
import type User from './user';
import type Task from './task';
import type Phase from './value-objects/phase';

export default class lawsuit {
	constructor(
		private _cnj: string,
		private _subject: string,
		private _class_suit: ClassSuit,
		private _lawsuit_id: string,
		private _distribution_date: Date,
		private _phase: Phase,
		private _foro: string,
		private _vara: string,
		private _clients: Client[],
		private _qualification: Qualification,
		private _defendants: Defendant[],
		private _case_cost: number,
		private _events: Event[],
		private _last_moviment: Moviment,
		private _tasks: Task[],
		private _responsible: User,
		private _rite: string
	) {}
}
