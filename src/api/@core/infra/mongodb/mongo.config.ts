import { connect } from "mongoose";
import type { IMongoConnect } from "./mongoconfig.interface";
import * as dotenv from 'dotenv';
dotenv.config();

export class MongoConfig implements IMongoConnect {
    constructor(){

    }
    async connect(): Promise<void> {
        console.log(process.env.MONGODB);
         await connect(process.env.MONGODB); 
    }
    close(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public readonly url: string;
    public readonly database: string;
}