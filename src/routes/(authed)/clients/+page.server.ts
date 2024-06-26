import { ClientController } from '../../../api/controllers/client.controller';
import { generateFriendlyMessage } from '../../../api/helper';
export async function load() {
	try {
		const listClients = await new ClientController().getClients();
		return { listClients: listClients };
	} catch (e) {
		const message = generateFriendlyMessage(e.message);
		return { error: message };
	}
}
/*		const listClients = [
			{
				name: 'Empresa Milionaria',
				email: 'client1@gmail.com',
				phone: '99 9999999',
				legal_documents: [
					{
						type: 6,
						document_number: '06.101.561/0001-63'
					}
				],
				addresses: [
					{
						address_id: '1',
						address: 'Rod Admar Gonzaga 1669, Itacorubi, Florianopolis, Santa Catarina, Brasil',
						street: 'Rod Admar Gonzaga',
						address_number: '1669',
						neighbornhood: 'Itacorubi',
						city: 'Florianopolis',
						state: 'Santa Catarina',
						zip: '88023000',
						country: 'Brasil',
						complement: '',
						description: ''
					}
				],
				job_title: 'Empresario',
				nacionality: 'brasileiro',
				marital_status: 'solteiro'
			},
			{
				name: 'Jose Agostinho',
				email: 'client2@gmail.com',
				phone: '88 88888888',
				legal_documents: [
					{
						type: 1,
						document_number: '423.247.654-19',
					}
				],
				addresses: [
					{
						address_id: '2',
						address: 'Rod Admar Gonzaga 180, Itacorubi, Florianopolis, Santa Catarina, Brasil',
						street: 'Rod Admar Gonzaga',
						address_number: '180',
						neighbornhood: 'Itacorubi',
						city: 'Florianopolis',
						state: 'Santa Catarina',
						zip: '88023000',
						country: 'Brasil',
						complement: '',
						description: ''
					}
				],
				job_title: 'Assalariado',
				nacionality: 'brasileiro',
				marital_status: 'casado'
			}
		];*/