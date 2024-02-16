import { ClientController } from '../../../api/controllers/client.controller';
import { generateFriendlyMessage } from '../../../api/helper';
import { json } from '@sveltejs/kit';
export async function POST() {
	try {
		//const listClients = await new ClientController().getClients();
		const listClients = [
			{
				name: 'Client 1',
				email: 'XXXXXXXXXXXXXXXXX',
				phone: 'XXXXXXXXXXXXXXXXX',
				legal_documents: [
					{
						type: 6,
						number: 'XXXXXXXXXXXXXXXXX'
					}
				]
			},
			{
				name: 'Client 2',
				email: 'XXXXXXXXXXXXXXXXX',
				phone: 'XXXXXXXXXXXXXXXXX',
				legal_documents: [
					{
						type: 1,
						number: 'XXXXXXXXXXXXXXXXX'
					}
				]
			}
		]
		return json({ listClients: listClients });
	} catch (e) {
		const message = generateFriendlyMessage(e.message);
		return json({ error: message });
	}
}
