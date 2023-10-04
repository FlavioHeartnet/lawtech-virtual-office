import Entity from '../../@shared/entity/entity.abstract';
import NotificationError from '../../@shared/notification/notification.error';
import type Court from './../value-objects/court';
import Uuid from './../value-objects/uuid.vo';
import { MovimentValidatorFactory } from './moviment.validation.factory';

export type CreateMovimentProps = {
	date: Date;
	description: string;
	court: Court;
	id?: Uuid;
};
export default class Moviment extends Entity {
	constructor(public date: Date, public description: string, public court: Court, id?: Uuid) {
		super();
		this._id = id || new Uuid();
		this.validate();
		if (this.notification.hasErrors()) {
			throw new NotificationError(this.notification.getErrors());
		}
	}
	private validate() {
		MovimentValidatorFactory.create().validate(this);
	}

	static create(props: CreateMovimentProps) {
		return new Moviment(props.date, props.description, props.court, props.id);
	}
}
