import { ValueObject } from './value-object';

export default class Court extends ValueObject {
	constructor(
		public name: string,
		public acronym: string,
		public court_id: number,
		public court_type: string,
		public court_grade: number
	) {
		super();
	}
}
