import { ClientController } from "../../../../api/controllers/client.controller";
import { LawsuitController } from "../../../../api/controllers/lawsuit.controller";
import { LawsuitOutputDto } from "../../../../api/dto/lawsuit.dtos";

export const actions = {
	default: async ({ request }) => {
        const data = await request.formData();
        if(data) {
            return {success: true}
        }else{
            return {errormessage: 'fail'}
        }
    }
}

export const load = async ({params}) => {
    const cnj = params.slug;
	const clientsTobeSelected: SelectedClient[] = [];
	await getClients(clientsTobeSelected);
	const classsuits = await getClasssuits();
	const qualifications = await getQualifications();
    const lawsuit = await new LawsuitController().findOne(cnj);
	const clientsController = new ClientController();
	const lawsuitClients:SelectedClient[] = [];
	await getActualClients(lawsuit, clientsController, lawsuitClients);
	const lawsuitDefendants:SelectedClient[] = [];
	await getCurrentDefendants(lawsuit, clientsController, lawsuitDefendants)

	
	return {
	    clientsTobeSelected,
		classsuits,
		qualifications,
        lawsuit,
		lawsuitClients,
		lawsuitDefendants
	};
};

async function getActualClients(lawsuit: LawsuitOutputDto, clientsController: ClientController, lawsuitClients: SelectedClient[]) {
	for (let i = 0; lawsuit.clients.length > i; i++) {
		const id = lawsuit.clients[i].id;
		const name = (await clientsController.getClientById(id)).name;
		lawsuitClients.push({
			label: name,
			value: id
		});
	}
}

async function getCurrentDefendants(lawsuit: LawsuitOutputDto, clientsController: ClientController, lawsuitDefendants: SelectedClient[]) {
	for (let i = 0; lawsuit.defendants.length > i; i++) {
		const id = lawsuit.defendants[i].id;
		const name = (await clientsController.getClientById(id)).name;
		lawsuitDefendants.push({
			label: name,
			value: id
		});
	}
}

async function getQualifications() {
	const resp = await new LawsuitController().getQualifications();
	const qualifications = [];
	resp.forEach((classsuit) => {
		qualifications.push({
			value: classsuit.qualification,
			label: classsuit.qualification
		});
	});

	return qualifications;
}

async function getClasssuits() {
	const respclasssuits = await new LawsuitController().getClassSuits();
	const classsuits = [];
	respclasssuits.forEach((classsuit) => {
		classsuits.push({
			value: classsuit.class,
			label: classsuit.class
		});
	});

	return classsuits;
}
export type SelectedClient = {
	value: string;
	label: string;
}

async function getClients(clientsTobeSelected: SelectedClient[]) {
	const resp = await new ClientController().getClients();
	resp.forEach((client) => {
		clientsTobeSelected.push({
			value: client.id,
			label: client.name
		});
	});
}