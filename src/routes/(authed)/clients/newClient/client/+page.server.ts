import { fail } from '@sveltejs/kit';
import { ClientController } from '../../../../../api/controllers/client.controller';
import { generateFriendlyMessage } from '../../../../../api/helper';
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
						address_number: parseInt(number),
						state: state,
						city: city,
						zip: zipCode,
						street: street,
						country: country,
						neighbornhood: neighborhood,
						description: 'home'
					}
				],
				email: email,
				job_title: job_title,
				legal_documents: [{ document: legal_documents, type: parseInt(documentType) }],
				name: name,
				nacionality: nacionality,
				marital_status: marital_status,
				phone: phone
			});

			if (resp.id) {
				return { success: true };
			}
		} catch (e) {
			const message = generateFriendlyMessage(e.message);
			return { errormessage: message };
		}

		return fail(404, { incorrect: true });
	}
};
