import { fail } from '@sveltejs/kit';
import { ClientController } from '../../../../api/controllers/client.controller';
import { generateFriendlyMessage } from '../../../../api/helper';
// TODO find a way to have legal_documents and Address objects be stored here
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name')?.toString() ?? '';
		const email = data.get('email')?.toString() ?? '';
		const phone = data.get('phone')?.toString() ?? '';
		const job_title = data.get('job_title')?.toString() ?? '';
		const nacionality = data.get('nacionality')?.toString() ?? '';
		const legal_documents = data.get('legal_documents')?.toString() ?? '';
		const documentType = data.get('documentType')?.toString() ?? '';
		const marital_status = data.get('marital_status')?.toString() ?? '';

		try {
			
			if(name){
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
	const clientsTobeSelected = []
	resp.forEach((client)=>{
		clientsTobeSelected.push({
			value: client.id,
			label: client.name,
		});
	});
	return {clientsTobeSelected: clientsTobeSelected }
}
