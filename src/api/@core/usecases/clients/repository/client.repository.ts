import type { ISearchableRepository } from '../../../@shared/repository/repository-interface';
import { SearchParams } from '../../../@shared/repository/search-params';
import { SearchResult } from '../../../@shared/repository/search-result';
import type Client from '../../../entities/client/client';
import type Uuid from '../../../entities/value-objects/uuid.vo';

export type ClientFilter = string;

export class ClientSearchParams extends SearchParams<ClientFilter> {}

export class ClientSearchResult extends SearchResult<Client> {}

export interface IClientRepository
	extends ISearchableRepository<
		Client,
		Uuid,
		ClientFilter,
		ClientSearchParams,
		ClientSearchResult
	> {
	insertValidate(entity: Client): Promise<void>;
}
