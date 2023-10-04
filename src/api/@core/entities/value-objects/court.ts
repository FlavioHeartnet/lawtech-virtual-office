import { ValueObject } from './value-object';

export default class Court extends ValueObject {
	constructor(
		private _name: string,
		private _acronym: string,
		private _court_id: number,
		private _court_type: string,
		private _court_grade: number
	) {
		super();
	}

	get name(): string {
		return this._name;
	}

	get acronym(): string {
		return this._acronym;
	}

	get court_id(): number {
		return this._court_id;
	}

	get court_type(): string {
		return this._court_type;
	}

	get court_grade(): number {
		return this._court_grade;
	}

}
