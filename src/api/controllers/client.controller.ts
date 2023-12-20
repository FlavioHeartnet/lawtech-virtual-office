import CreateClient from '../@core/usecases/clients/create-client.uc';
import UpdateClientUseCase from '../@core/usecases/clients/update-client.uc';
import type { UpdateClientDTO, CreateClientDTO } from '../dto/client.dtos';

// TODO: Finish controller, create unit tests
export class ClientController {
	async getClients() {}

	async getClientById(id: string) {}

	async getClientByEmail(email: string) {}

	async createClient(user: CreateClientDTO) {
		return new CreateClient().execute(user);
	}

	async updateClient(id: string, client: UpdateClientDTO) {
		return new UpdateClientUseCase().execute({
			id: id,
			email: client.email,
			name: client.name,
			addresses: client.addresses,
			job_title: client.job_title,
			legal_documents: client.legal_documents,
			marital_status: client.marital_status,
			nacionality: client.nacionality,
			phone: client.phone
		});
	}
}
