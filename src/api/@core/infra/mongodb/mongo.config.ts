import { connect } from 'mongoose';
import type { IDataBaseConnect } from './mongo.config.interface';
import { config } from '../../../config';

export abstract class MongoConnect implements IDataBaseConnect {
	async connect(dburl: string = config.mongoUrl): Promise<void> {
		await connect(dburl, { dbName: config.dbName });
	}
	close(): Promise<void> {
		throw new Error('Method not implemented.');
	}
	public readonly url: string;
	public readonly database: string;
}
