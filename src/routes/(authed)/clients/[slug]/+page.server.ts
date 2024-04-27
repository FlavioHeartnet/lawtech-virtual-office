import { error, fail } from '@sveltejs/kit';
import { ClientController } from '../../../../api/controllers/client.controller.js';

export async function load({params}){
    const clientid = params.slug;
    const client = await new ClientController().getClientById(clientid);
    
    if(client){
        return {client: client}
    }

   error(404, 'Not found');
}
//TODO add action to update client
export const actions = {
  update: async ({request}) => {
        const data = await request.formData();
        const id = data.get('id')?.toString() ?? '';
        const email = data.get('email')?.toString() ?? '';
        const job_title = data.get('job_title')?.toString() ?? '';
        const legal_documents = data.get('documents')?.toString() ?? '';
        const document_type = data.get('document_type')?.toString() ?? '';
        const marital_status = data.get('marital_status')?.toString() ?? '';
        const nacionality = data.get('nacionality')?.toString() ?? '';
        const name = data.get('name')?.toString() ?? '';
        const phone = data.get('phone')?.toString() ?? '';

        const resp = await new ClientController().updateClient({
            id,
            email,
            job_title,
            legal_documents: [{ document:legal_documents, type: parseInt(document_type)}],
            marital_status,
            nacionality,
            name,
            phone,
            addresses: []

        });
        if(resp){
            return { success: true }
        }
        return fail(404, { incorrect: true });
    },

    updateAddress: async ({request}) => {
        const data = await request.formData();
		const zip = data.get('zipCode')?.toString() ?? '';
		const street = data.get('street')?.toString() ?? '';
		const neighbornhood = data.get('neighbornhood')?.toString() ?? '';
		const city = data.get('city')?.toString() ?? '';
		const state = data.get('state')?.toString() ?? '';
		const country = data.get('country')?.toString() ?? '';
		const number = data.get('number')?.toString() ?? '';
		const complement = data.get('complement')?.toString() ?? '';
		const id = data.get('id')?.toString() ?? '';
		const client_id = data.get('client_id')?.toString() ?? '';
		try{
			const isUpdate = await new ClientController().updateAddress({
				zip: zip,
				street: street,
				neighbornhood: neighbornhood,
				city: city,
				state: state,
				country: country,
				address_number: parseInt(number),
				complement: complement,
				id: id,
				description: 'home',
				client_id: client_id
			});
			if (isUpdate) {
				return {sucess: true}
			}
		}catch(e){
			return fail(500, e.message);
		}
    }
}