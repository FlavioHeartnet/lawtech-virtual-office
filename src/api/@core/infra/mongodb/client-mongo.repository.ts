import Client from "../../entities/client/client";
import Uuuid from "../../entities/value-objects/uuid.vo";
import type { IClientRepository } from "../../usecases/clients/repository/client.repository";

export class ClientMongoRepository implements IClientRepository{
    insert(entity: Client): Promise<void> {
        throw new Error("Method not implemented.");
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
