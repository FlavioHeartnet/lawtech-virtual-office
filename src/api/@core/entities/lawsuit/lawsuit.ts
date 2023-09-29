import type ClassSuit from '../value-objects/lawsuit-class';
import type Client from '../client/client';
import type Defendant from '../defendant';
import type Event from '../event';
import type Moviment from '../moviment';
import type Qualification from '../value-objects/qualification';
import type User from '../user';
import type Task from '../task';
import type Phase from '../value-objects/phase';
import Uuuid from '../value-objects/uuid.vo';
import Entity from '../../@shared/entity/entity.abstract';
import { LawsuitValidators } from './lawsuit.validatiors';
import NotificationError from '../../@shared/notification/notification.error';

export type CreateLawsuitProps = {
	cnj: string;
	subject: string;
	lawsuit_class: string;
	distribution_date: Date;
	phase: Phase;
	foro?: string;
	vara?: string;
	clients?: Client[];
	qualification?: Qualification;
	defendants?: Defendant[];
	case_cost?: number;
	fee?: number;
	events?: Event[];
	last_moviment?: Moviment;
	tasks?: Task[];
	responsible?: User;
	rite?: string;
	lawsuit_official_link?: string;
};

export default class Lawsuit extends Entity {
	constructor(
		private _lawsuit_id: Uuuid,
		private _cnj: string,
		private _subject: string,
		private _lawsuit_class: string,
		private _distribution_date: Date,
		private _phase?: Phase,
		private _foro?: string,
		private _vara?: string,
		private _clients?: Client[],
		private _qualification?: Qualification,
		private _defendants?: Defendant[],
		private _case_cost?: number,
		private _fee?: number,
		private _events?: Event[],
		private _tasks?: Task[],
		private _responsible?: User,
		private _rite?: string,
		private _lawsuit_official_link?: string,
		private _last_moviment?: Moviment
	) {
		super();
		this.validate();
		if (this.notification.hasErrors()) {
			throw new NotificationError(this.notification.getErrors());
		  }
	}

	validate(){
		new LawsuitValidators().validate(this)
	}

	static create(props: CreateLawsuitProps, id?: string) {
		return new Lawsuit(
			new Uuuid(id), 
			props.cnj, 
			props.subject, 
			props.lawsuit_class, 
			props.distribution_date,
			props.phase,
			props.foro,
			props.vara,
			props.clients,
			props.qualification,
			props.defendants,
			props.case_cost,
			props.fee,
			props.events,
			props.tasks,
			props.responsible,
			props.rite,
			props.lawsuit_official_link,
			props.last_moviment
			);
		
	}

	get lawsuit_id(): Uuuid {
		return this._lawsuit_id;
	}

	get cnj(): string {
		return this._cnj;
	}

	get subject(): string {
		return this._subject;
	}

	get lawsuit_class(): string {
		return this._lawsuit_class;
	}

	get distribution_date(): Date {
		return this._distribution_date;
	}

	changePhase(newPhase: Phase) {
		this._phase = newPhase;
	}

	addClient(client: Client) {
		this._clients?.push(client);
	}

	addTask(task: Task) {
		this._tasks?.push(task);
	}
	addEvent(event: Event) {
		this._events?.push(event);
	}

	toJSON() {
		return {
			lawsuit_id: this._lawsuit_id.id,
			cnj: this._cnj,
			subject: this._subject,
			class_suit: this._lawsuit_class,
			distribution_date: this._distribution_date,
			phase: this._phase,
			foro: this._foro,
			vara: this._vara,
			clients: this._clients,
			qualification: this._qualification,
			defendants: this._defendants,
			case_cost: this._case_cost,
			events: this._events,
			last_moviment: this._last_moviment,
			tasks: this._tasks,
			responsible: this._responsible,
			rite: this._rite,
			lawsuit_official_link: this._lawsuit_official_link
		};
	}
}
