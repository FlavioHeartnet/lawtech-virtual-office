import { Schema, model } from 'mongoose';

export interface ILawsuitSchema {
	cnj: string;
	subject: string;
	clients: ClientProps[];
	defendants: ClientProps[];
	distributionDate: Date;
	foro: string;
	vara: string;
	qualification: string;
	case_cost: number;
	fee: number;
	phase: string;
	events?: EventProps[];
	last_moviment?: MovimentProps;
	tasks?: TaskProps[];
	rite?: string;
	lawsuit_official_link?: string;
	lawsuit_class: string;
	responsible: UserProps;
	created_at: Date;
	updated_at: Date;
}
export type UserProps = {
	user_id: string;
};
export type MovimentProps = {
	moviment_id: string;
	date: Date;
};
export type EventProps = {
	event_id: string;
};
export type TaskProps = {
	task_id: string;
};
export type ClientProps = {
	client_id: string;
};

export const lawsuitSchema = new Schema<ILawsuitSchema>({
	cnj: { type: String, required: true },
	subject: { type: String, required: true },
	clients: Array,
	distributionDate: { type: Date, required: true },
	defendants: Array,
	foro: { type: String, required: true },
	vara: { type: String, required: true },
	qualification: { type: String, required: true },
	case_cost: { type: Number, required: true },
	fee: { type: Number, required: true },
	created_at: { type: Date, required: true },
	updated_at: { type: Date, required: true }
});

export interface LawsuitDocument extends ILawsuitSchema, Document {}

export class LawsuitModel {
	static create() {
		return model<LawsuitDocument>('lawsuit', lawsuitSchema);
	}
}
