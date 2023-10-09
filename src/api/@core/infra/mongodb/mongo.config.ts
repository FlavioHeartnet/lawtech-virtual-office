import { connect } from 'mongoose';
import type { IMongoConnect } from './mongoconfig.interface';

export class MongoConfig implements IMongoConnect {
	async connect(dburl: string): Promise<void> {
		await connect(dburl);
	}
	close(): Promise<void> {
		throw new Error('Method not implemented.');
	}
	public readonly url: string;
	public readonly database: string;
}
