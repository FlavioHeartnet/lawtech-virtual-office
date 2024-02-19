import { ClientController } from '../../../api/controllers/client.controller';
import { generateFriendlyMessage } from '../../../api/helper';
import { json } from '@sveltejs/kit';
export async function POST() {
	try {
		//const listClients = await new ClientController().getClients();
		const listClients = [
			{
				name: 'Client 1',
				email: 'client1@gmail.com',
				phone: '99 9999999',
				legal_documents: [
					{
						type: 6,
						document_number: '06.101.561/0001-63'
					}
				]
			},
			{
				name: 'Client 2',
				email: 'client2@gmail.com',
				phone: '88 88888888',
				legal_documents: [
					{
						type: 1,
						document_number: '42324765419'
					}
				]
			}
		];
		return json({ listClients: listClients });
	} catch (e) {
		const message = generateFriendlyMessage(e.message);
		return json({ error: message });
	}
}
