import { json } from '@sveltejs/kit';
import { ClientController } from '../../../../../api/controllers/client.controller.js';

//TODO: Create the use case to update only the client address.
export async function POST({ request }) {
	const data = await request.json();
	const isUpdate = await new ClientController().updateAddress(data);
	return json(isUpdate);
}
