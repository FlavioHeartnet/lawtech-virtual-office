import { ClientController } from '../../../api/controllers/client.controller';
import { generateFriendlyMessage } from '../../../api/helper';
import { json } from '@sveltejs/kit';
export async function POST() {
	try {
		const listClients = await new ClientController().getClients();
		return json({ listClients: listClients });
	} catch (e) {
		const message = generateFriendlyMessage(e.message);
		return json({ error: message });
	}
}
