import { ClientController } from "../../../../api/controllers/client.controller";
import { LawsuitController } from "../../../../api/controllers/lawsuit.controller";

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
	const clientsTobeSelected = [];
//	await getClients(clientsTobeSelected);
	const classsuits = await getClasssuits();
	const qualifications = await getQualifications();
    const lawsuit = await new LawsuitController().findOne(cnj);

	return {
	    clientsTobeSelected,
		classsuits,
		qualifications,
        lawsuit
	};
};

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