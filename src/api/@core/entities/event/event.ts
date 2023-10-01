import Entity from '../../@shared/entity/entity.abstract';
import NotificationError from '../../@shared/notification/notification.error';
import type Client from '../client/client';
import type Lawsuit from '../lawsuit/lawsuit';
import type Moviment from '../moviment';
import type User from '../user';
import Uuuid from '../value-objects/uuid.vo';
import { EventValidatorFactory } from './event.validator.factory';

export enum eventType {
	VIRTUAL = 'Virtual',
	LOCAL = 'Presencial'
}
export type CreateEventProps = {
	event_class: string;
	date: Date;
	duration: Date;
	responsible: User;
	description: string;
	type: eventType;
	clients?: Client[];
	lawsuit?: Lawsuit;
	location?: string;
};
export default class Event extends Entity {
	constructor(
		private event_id: Uuuid,
		private _event_class: string,
		private _date: Date,
		private _duration: Date,
		private _responsible: User,
		private _description: string,
		private _type: eventType,
		private _clients?: Client[],
		private _lawsuit?: Lawsuit,
		private _location?: string
	) {
		super();
		this.validate();
		if (this.notification.hasErrors()) {
			throw new NotificationError(this.notification.getErrors());
		}
	}
	validate() {
		EventValidatorFactory.create().validate(this);
	}

	get event_id_value() {
		return this.event_id.id;
	}

	get event_class() {
		return this._event_class;
	}
	get date() {
		return this._date;
	}
	get duration() {
		return this._duration;
	}
	get responsible() {
		return this._responsible;
	}
	get description() {
		return this._description;
	}
	get type() {
		return this._type;
	}
	get location() {
		return this._location;
	}


	static create(props: CreateEventProps, id?: string) {
		return new Event(
			new Uuuid(id),
			props.event_class,
			props.date,
			props.duration,
			props.responsible,
			props.description,
			props.type
		);
	}

	toJSON() {
		return {
			event_id: this.event_id.id,
			event_class: this._event_class,
			date: this._date,
			duration: this._duration,
			responsible: this._responsible,
			description: this._description,
			clients: this._clients,
			lawsuit: this._lawsuit,
			location: this._location,
			type: this._type
		};
	}
}
