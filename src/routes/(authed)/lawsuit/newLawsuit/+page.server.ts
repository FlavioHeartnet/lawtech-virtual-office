import { fail } from '@sveltejs/kit';
import { ClientController } from '../../../../api/controllers/client.controller';
import { generateFriendlyMessage } from '../../../../api/helper';
// TODO find a way to have legal_documents and Address objects be stored here
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const cnj = data.get('cnj')?.toString() ?? '';
		const subject = data.get('subject')?.toString() ?? '';
		const distributionDate = data.get('distributionDate')?.toString() ?? '';
		const foro = data.get('foro')?.toString() ?? '';
		const vara = data.get('vara')?.toString() ?? '';
		const qualification = data.get('qualification')?.toString() ?? '';
		const cost_case = data.get('cost_case')?.toString() ?? '';
		const fee = data.get('fee')?.toString() ?? '';
		const clients = data.get('clients');
		const defendants = data.get('defendants');

		try {
			if (cnj) {
				return { success: true };
			}
		} catch (e) {
			const message = generateFriendlyMessage(e.message);
			return { errormessage: message };
		}

		return fail(404, { incorrect: true });
	}
};

export const load = async () => {
	const resp = await new ClientController().getClients();
	const clientsTobeSelected = [];
	resp.forEach((client) => {
		clientsTobeSelected.push({
			value: client.id,
			label: client.name
		});
	});
	return { clientsTobeSelected: clientsTobeSelected };
};
