import type { ISearchableRepository } from '../../../@shared/repository/repository-interface';
import { SearchParams } from '../../../@shared/repository/search-params';
import { SearchResult } from '../../../@shared/repository/search-result';
import type User from '../../../entities/user/user';
import type Uuid from '../../../entities/value-objects/uuid.vo';

export type UserFilter = string;

export class UserSearchParams extends SearchParams<UserFilter> {}

export class UserSearchResult extends SearchResult<User> {}

export interface IUserRepository
	extends ISearchableRepository<User, Uuid, UserFilter, UserSearchParams, UserSearchResult> {
	insertValidate(entity: User): Promise<void>;
	findByEmail(email: string): Promise<User>;
}
