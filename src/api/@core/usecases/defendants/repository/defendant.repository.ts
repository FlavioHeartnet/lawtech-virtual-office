import type {
	ISearchableRepository
} from '../../../@shared/repository/repository-interface';
import { SearchParams } from '../../../@shared/repository/search-params';
import { SearchResult } from '../../../@shared/repository/search-result';
import type Defendant from '../../../entities/defendant/defendant';
import type Uuid from '../../../entities/value-objects/uuid.vo';

export type DefendantFilter = string;

export class DefendantSearchParams extends SearchParams<DefendantFilter> {}

export class DefendantSearchResult extends SearchResult<Defendant> {}

export interface IDefendantRepository
	extends ISearchableRepository<
		Defendant,	
		Uuid,
		DefendantFilter,
		DefendantSearchParams,
		DefendantSearchResult
	> {
	insertValidate(entity: Defendant): Promise<void>;
}
