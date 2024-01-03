import { fail } from '@sveltejs/kit';
import { ClientController } from '../../../../../api/controllers/client.controller';
import { generateFriendlyMessage } from '../../../../../api/helper';
// TODO find a way to have legal_documents and Address objects be stored here
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name')?.toString() ?? '';
		const email = data.get('email')?.toString() ?? '';
		const phone = data.get('phone')?.toString() ?? '';
		const legal_documents = data.get('legal_documents')?.toString() ?? '';

		const street = data.get('street')?.toString() ?? '';
		const zipCode = data.get('zipCode')?.toString() ?? '';
		const neighborhood = data.get('neighborhood')?.toString() ?? '';
		const city = data.get('city')?.toString() ?? '';
		const state = data.get('state')?.toString() ?? '';
		const number = data.get('number')?.toString() ?? '';
		const complement = data.get('complement')?.toString() ?? '';
		const country = data.get('country')?.toString() ?? '';
		try {
			const resp = await new ClientController().createClient({
				addresses: [
					{
						complement: complement,
						number: parseInt(number),
						state: state,
						city: city,
						zipCode: zipCode,
						street: street,
						country: country,
						neighborhood: neighborhood,
						description: 'office'
					}
				],
				email: email,
				job_title: '',
				legal_documents: [{ document: legal_documents, type: 6 }],
				name: name,
				nacionality: '',
				marital_status: '',
				phone: phone
			});

			if (resp.id) {
				return { success: true };
			}
		} catch (e) {
			console.log(e.message);
			const message = generateFriendlyMessage(e.message);
			console.log(message);
			return { errormessage: message };
		}

		return fail(404, { incorrect: true });
	}
};
