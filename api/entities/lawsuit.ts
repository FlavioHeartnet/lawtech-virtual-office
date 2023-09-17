import ClassSuit from './value-objects/class-suit';
import Client from './client';
import Defendant from './defendant';
import Event from './event';
import Moviment from './moviment';
import Qualification from './value-objects/qualification';
import User from './user';
import Task from './task';
import Phase from './phase';

export default class lawsuit {
	private _distribution_date: Date;
	private _phase: Phase;
	private _foro: string;
	private _vara: string;
	private _clients: Client[];
	private _qualification: Qualification;
	private _defendants: Defendant[];
	private _case_cost: number;
	private _events: Event[];
	private _last_moviment: Moviment;
	private _tasks: Task[];
	private _responsible: User;
	private _rite: string;

	constructor(private _cnj: string, private _subject: string, private _class_suit: ClassSuit) {}
}
