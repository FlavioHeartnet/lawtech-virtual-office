import type Client from '../client/client';
import type Defendant from '../defendant/defendant';
import type Event from '../event/event';
import type Moviment from '../moviment/moviment';
import type User from '../user/user';
import type Task from '../task/task';
import Phase from '../value-objects/phase';
import Uuuid from '../value-objects/uuid.vo';
import Entity from '../../@shared/entity/entity.abstract';
import NotificationError from '../../@shared/notification/notification.error';
import { LawsuitValidatorFactory } from './validator/lawsuit.validator.factory';

export type CreateLawsuitProps = {
	cnj: string;
	subject: string;
	lawsuit_class: string;
	distribution_date: Date;
	phase: string;
	foro: string;
	vara: string;
	clients: Client[];
	qualification: string;
	defendants: Defendant[];
	responsible: User;
	case_cost?: number;
	fee?: number;
	events?: Event[];
	last_moviment?: Moviment;
	tasks?: Task[];
	rite?: string;
	lawsuit_official_link?: string;
};

export type ConstructorLawsuitProps = {
	id: Uuuid;
	cnj: string;
	subject: string;
	lawsuit_class: string;
	distribution_date: Date;
	phase: string;
	foro: string;
	vara: string;
	clients: Client[];
	qualification: string;
	defendants: Defendant[];
	responsible: User;
	case_cost?: number;
	fee?: number;
	events?: Event[];
	last_moviment?: Moviment;
	tasks?: Task[];
	rite?: string;
	lawsuit_official_link?: string;
};

export default class Lawsuit extends Entity {
	private _cnj: string;
	private _subject: string;
	private _lawsuit_class: string;
	private _distribution_date: Date;
	private _phase: string;
	private _foro: string;
	private _vara: string;
	private _clients: Client[];
	private _qualification: string;
	private _defendants: Defendant[];
	private _responsible: User;
	private _case_cost?: number;
	private _fee?: number;
	private _events?: Event[];
	private _tasks?: Task[];
	private _rite?: string;
	private _lawsuit_official_link?: string;
	private _last_moviment?: Moviment;
	constructor(props: ConstructorLawsuitProps) {
		super();
		this._id = props.id;
		this._cnj = props.cnj;
		this._subject = props.subject;
		this._subject = props.subject;
		this._lawsuit_class = props.lawsuit_class;
		this._distribution_date = props.distribution_date;
		this._phase = props.phase || Phase.ACKNOWLEDGE;
		this._foro = props.foro;
		this._vara = props.vara;
		this._clients = props.clients;
		this._qualification = props.qualification;
		this._defendants = props.defendants;
		this._case_cost = props.case_cost;
		this._fee = props.fee;
		this._events = props.events;
		this._tasks = props.tasks;
		this._responsible = props.responsible;
		this._rite = props.rite;
		this._lawsuit_official_link = props.lawsuit_official_link;
		this._last_moviment = props.last_moviment;

		this.validate();
		if (this.notification.hasErrors()) {
			throw new NotificationError(this.notification.getErrors());
		}
	}

	validate() {
		LawsuitValidatorFactory.create().validate(this);
	}

	static create(props: CreateLawsuitProps, id?: string) {
		return new Lawsuit({ ...props, id: new Uuuid(id) });
	}

	get lawsuit_id(): Uuuid {
		return this._id;
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

	get phase(): string {
		return this._phase;
	}

	get foro(): string {
		return this._foro;
	}
	get vara(): string {
		return this._vara;
	}

	get clients(): Client[] {
		return this._clients;
	}

	get defendant(): Defendant[] {
		return this._defendants;
	}

	get qualification(): string {
		return this._qualification;
	}

	get case_cost(): number {
		return this._case_cost || 0;
	}

	get fee(): number {
		return this._fee || 0;
	}

	changePhase(newPhase: string) {
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
			lawsuit_id: this._id.id,
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
			lawsuit_official_link: this._lawsuit_official_link,
			fee: this._fee,
		};
	}
}
