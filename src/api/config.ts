import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
	mongoUrl: process.env.MONGODB,
	dbName: process.env.DBNAME
};