import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
	mongoUrl: process.env.MONGODB,
	dbName: process.env.DBNAME,
	apiKey: process.env.APIKEY,
	authDomain: process.env.AUTHDOMAIN,
	projectId: process.env.PROJECTID,
	storageBucket: process.env.STORAGEBUCKET,
	messagingSenderId: process.env.MESSAGINGSENDERID,
	appId: process.env.APPID,
	measurementId: process.env.MEASUREMENTID,
};
