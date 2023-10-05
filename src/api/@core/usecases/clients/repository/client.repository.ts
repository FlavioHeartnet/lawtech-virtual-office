import type { IRepository } from "../../../@shared/repository/repository-interface";
import type Client from "../../../entities/client/client";
import type Uuid from "../../../entities/value-objects/uuid.vo";

export interface IClientRepository extends IRepository<Client, Uuid>{}