import type { ValueObject } from '../../entities/value-objects/value-object';
import type Entity from '../entity/entity.abstract';
import type { SearchParams } from './search-params';
import type { SearchResult } from './search-result';

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

export interface ISearchableRepository<
	T extends Entity,
	EntityId extends ValueObject,
	Filter = string,
	SearchInput = SearchParams<Filter>,
	SearchOutput = SearchResult
> extends IRepository<T, EntityId> {
	sortableFields: string[];
	search(props: SearchInput): Promise<SearchOutput>;
}
