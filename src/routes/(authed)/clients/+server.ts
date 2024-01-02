import { ClientController } from "../../../api/controllers/client.controller";
import { generateFriendlyMessage } from "../../../api/helper";

export async function POST(){
    try{
        const listClients = new ClientController().getClients();
        return { listClients: listClients };
    } catch (e){
    	const message = generateFriendlyMessage(e.message);
			return { errormessage: message }
	}
}