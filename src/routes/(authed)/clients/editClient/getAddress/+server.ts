import { json } from '@sveltejs/kit';
import { ClientController } from '../../../../../api/controllers/client.controller';

//TODO: Connect this to the controller method getAddress
export async function POST({ request }) {
	const data = await request.json();
	return json(await new ClientController().getAddress(data.addressId));
}
