import Client from "./client";
import  Defendant from "./defendant";
import  Event  from "./event";
import Moviment from "./moviment";
import Responsible from "./responsible";
import Task from "./task";

export default class lawsuit {

	private _distribution_date: Date;
	private _phase: number;
	private _foro: string;
	private _clients: Client[];
	private _qualification: string;
	private _defendants: Defendant[];
	private _case_cost: number;
	private _events: Event[];
	private _vara: string;
	private _last_moviment: Moviment;
	private _tasks: Task[];
	private _responsible: Responsible;
	private _rite: string;


	constructor(private _cnj: string, private _subject: string, private _class_suit: string) {}

}
