import Client from "../../../entities/client/client";
import Uuuid from "../../../entities/value-objects/uuid.vo";
import type { ClientSearchParams, ClientSearchResult, IClientRepository } from "../../../usecases/clients/repository/client.repository";
import { MongoConfig } from "../mongo.config";
import { ClientModel } from "./client.schema";

export class ClientMongoRepository implements IClientRepository{
    private clientModel;
    constructor(){
        new MongoConfig().connect();
        this.clientModel =  ClientModel.create();
    }

    sortableFields: string[];
    search(props: ClientSearchParams): Promise<ClientSearchResult> {
        throw new Error("Method not implemented.");
    }
    async insert(entity: Client): Promise<void> {
        try{
            await new this.clientModel(entity.toJSON()).save();
        }catch(e){
            throw new Error(e); 
        }
    }
    bulkInsert(entities: Client[]): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(entity: Client): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(entity: Client): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(id: Uuuid): Promise<Client> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<Client[]> {
        throw new Error("Method not implemented.");
    }
    getentity(): new (...args: any[]) => Client {
        return Client;
    }
    getentityid(): new (...args: any[]) => Uuuid {
        return Uuuid;
    }
}



