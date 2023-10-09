import { connect } from 'mongoose';
import type { IMongoConnect } from './mongoconfig.interface';
import { config } from '../../../config';

export class MongoConnect implements IMongoConnect {
	async connect(dburl: string = config.mongoUrl): Promise<void> {
		await connect(dburl, {dbName: config.dbName});
	}
	close(): Promise<void> {
		throw new Error('Method not implemented.');
	}
	public readonly url: string;
	public readonly database: string;
}
