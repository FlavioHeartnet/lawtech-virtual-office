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

export const actions = {
  default: () => {
        const resp =true;
        if(resp){
            return {success: true}
        }
        return fail(404, { incorrect: true });
    }
}