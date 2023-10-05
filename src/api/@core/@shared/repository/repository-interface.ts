import type { ValueObject } from "../../entities/value-objects/value-object";
import type Entity from "../entity/entity.abstract";

export interface IRepository<T extends Entity, EntityId extends ValueObject> {
    insert(entity: T): Promise<void>;
    bulkInsert(entities: T[]): Promise<void>;
    update(entity: T): Promise<void>;
    delete(entity: T): Promise<void>;

    findById(id: EntityId): Promise<T>;
    findAll(): Promise<T[]>;

    getentity(): new (...args: any[]) => T;
    getentityid(): new (...args: any[]) => EntityId;
}

export interface ISearchableRepository<T extends Entity, EntityId extends 
ValueObject, 
SearchInput, 
SearchOutput>
extends IRepository<T, EntityId>
{
    sortableFields: string[];
    search(filter: Partial<T>): Promise<T[]>;
}