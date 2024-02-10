import { Mongoose, connect } from 'mongoose';
import type { IDataBaseConnect } from './mongo.config.interface';
import { config } from '../../../config';
import Notification from '../../@shared/notification/notification';

export abstract class MongoConnect implements IDataBaseConnect {
	public notification: Notification;
	constructor() {
		this.notification = new Notification();
	}
	async connect(dburl: string = config.mongoUrl): Promise<void> {
		this.url = dburl;
		this.database = await connect(dburl, { dbName: config.dbName });
	}
	close(): Promise<void> {
		throw new Error('Method not implemented.');
	}
	public url: string;
	public database: Mongoose;
}
