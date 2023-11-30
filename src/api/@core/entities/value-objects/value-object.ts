import pkg from 'lodash';
const { isEqual } = pkg;
import Notification from './../../@shared/notification/notification';
export abstract class ValueObject {
	notification: Notification;
	constructor() {
		this.notification = new Notification();
	}
	public equals(vo: this): boolean {
		if (vo == null || vo == undefined) {
			return false;
		}
		if (vo.constructor.name !== this.constructor.name) {
			return false;
		}

		return isEqual(vo, this);
	}
}
