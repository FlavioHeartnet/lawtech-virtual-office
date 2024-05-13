import { json } from '@sveltejs/kit';
import { ClientController } from '../../../../../api/controllers/client.controller';

export async function POST({ request }) {
	const data = await request.json();
	return json(await new ClientController().getAddress(data.addressId));
}
