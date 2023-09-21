import Court from './value-objects/court';

export default class Moviment {
	constructor(
		public id: number,
		public date: Date,
		public description: string,
		public court: Court
	) {}
}
