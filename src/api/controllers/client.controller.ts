import CreateClient from '../@core/usecases/clients/create-client.uc';
import GetAddressUseCase from '../@core/usecases/clients/find-address.uc';
import { FindAllClientsUsecase } from '../@core/usecases/clients/findAll-client.uc';
import UpdateAddressUseCase from '../@core/usecases/clients/update-address.uc';
import UpdateClientUseCase from '../@core/usecases/clients/update-client.uc';
import type { UpdateAddressDTO } from '../dto/address.dto';
import type { UpdateClientDTO, CreateClientDTO } from '../dto/client.dtos';

// TODO: Finish controller, create unit tests
export class ClientController {
	async getClients() {
		return new FindAllClientsUsecase().execute();
	}

	//async getClientById(id: string) {}

	//async getClientByEmail(email: string) {}

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

	getAddress(id: string) {
		return new GetAddressUseCase().execute(id);
	}

	updateAddress(address: UpdateAddressDTO) {
		return new UpdateAddressUseCase().execute(address);
	}
}
