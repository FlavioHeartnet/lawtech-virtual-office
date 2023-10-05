import Uuuid from '../../entities/value-objects/uuid.vo';
import Notification from '../notification/notification';
export default abstract class Entity {
	protected _id: Uuuid = new Uuuid();
	public notification: Notification;

	constructor() {
		this.notification = new Notification();
	}

	get id(): Uuuid {
		return this._id;
	}

	abstract toJSON(): any;
}
