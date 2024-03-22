import { error } from '@sveltejs/kit';
import { ClientController } from '../../../../api/controllers/client.controller.js';

export async function load({params}){
    const clientid = params.slug;
    const client = await new ClientController().getClientById(clientid);
    
    if(client){
        return {client: client}
    }

   error(404, 'Not found');
}