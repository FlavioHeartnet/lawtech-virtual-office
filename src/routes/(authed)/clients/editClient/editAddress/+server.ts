import { json } from '@sveltejs/kit';
import { ClientController } from '../../../../../api/controllers/client.controller.js';

//TODO: turn this into a +page.server.ts and use Form actions
export async function POST({ request }) {
	const data = await request.json();
	const isUpdate = await new ClientController().updateAddress(data);
	return json(isUpdate);
}
