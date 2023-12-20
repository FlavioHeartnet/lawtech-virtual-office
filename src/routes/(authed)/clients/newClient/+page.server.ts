import { fail } from '@sveltejs/kit';
import { ClientController } from '../../../../api/controllers/client.controller';
// TODO find a way to have legal_documents and Address objects be stored here
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name')?.toString() ?? '';
		const email = data.get('email')?.toString() ?? '';
		const phone = data.get('phone')?.toString() ?? '';
		const addresses = data.get('addresses')?.toString() ?? '';
		const job_title = data.get('job_title')?.toString() ?? '';
		const nacionality = data.get('nacionality')?.toString() ?? '';
		const legal_documents = data.get('legal_documents')?.toString() ?? '';
        const marital_status = data.get('marital_status')?.toString() ?? '';

        const resp = await new ClientController().createClient({
            addresses: addresses,
            email: email,
            job_title: job_title,
            legal_documents: legal_documents,
            name: name,
            nacionality: nacionality,
            marital_status: marital_status,
            phone: phone,
        });

        if(resp.id){
            return {success: true}
        }

        return fail(404, { incorrect: true });
	}
};
