import type { ISearchableRepository } from '../../../@shared/repository/repository-interface';
import { SearchParams } from '../../../@shared/repository/search-params';
import { SearchResult } from '../../../@shared/repository/search-result';
import type Lawsuit from '../../../entities/lawsuit/lawsuit';
import type ClassSuit from '../../../entities/value-objects/lawsuit-class';
import type Uuid from '../../../entities/value-objects/uuid.vo';

export type LawsuitFilter = string;

export class LawsuitSearchParams extends SearchParams<LawsuitFilter> {}

export class LawsuitSearchResult extends SearchResult<Lawsuit> {}

export interface ILawsuitRepository
	extends ISearchableRepository<
		Lawsuit,
		Uuid,
		LawsuitFilter,
		LawsuitSearchParams,
		LawsuitSearchResult
	> {
	insertValidate(entity: Lawsuit): Promise<void>;
	findByCnj(cnj: string): Promise<Lawsuit>;
}
