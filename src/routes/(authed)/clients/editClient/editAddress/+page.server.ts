import { fail } from '@sveltejs/kit';
import { ClientController } from '../../../../../api/controllers/client.controller.js';


export const actions = {
	default: async ({ request }) => {
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
