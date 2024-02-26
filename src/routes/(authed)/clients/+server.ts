import { ClientController } from '../../../api/controllers/client.controller';
import { generateFriendlyMessage } from '../../../api/helper';
import { json } from '@sveltejs/kit';
export async function POST() {
	try {
		//const listClients = await new ClientController().getClients();
		const listClients = [
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
						address: 'Rod Admar Gonzaga 1669, Itacorubi, Florianopolis, Santa Catarina, Brasil'
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
						document_number: '423.247.654-19'
					}
				],
				addresses: [
					{
						address_id: '1',
						address: 'Rod Admar Gonzaga 1669, Itacorubi, Florianopolis, Santa Catarina, Brasil'
					}
				],
				job_title: 'Assalariado',
				nacionality: 'brasileiro',
				marital_status: 'casado'
			}
		];
		return json({ listClients: listClients });
	} catch (e) {
		const message = generateFriendlyMessage(e.message);
		return json({ error: message });
	}
}
