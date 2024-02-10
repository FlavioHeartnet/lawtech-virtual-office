import { fail } from '@sveltejs/kit';
import { ClientController } from '../../../../api/controllers/client.controller';
import { generateFriendlyMessage } from '../../../../api/helper';
import { LawsuitController } from '../../../../api/controllers/lawsuit.controller';
type dataObject = {
	value: string;
	label: string;
};
// TODO find a way to have legal_documents and Address objects be stored here
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const cnj = data.get('cnj')?.toString() ?? '';
		const subject = data.get('subject')?.toString() ?? '';
		const distributionDate = data.get('distributionDate')?.toString() ?? '';
		const foro = data.get('foro')?.toString() ?? '';
		const vara = data.get('vara')?.toString() ?? '';
		const qualification = JSON.parse(data.get('qualification').toString() ?? '') as dataObject;
		const cost_case = data.get('cost_case')?.toString() ?? '';
		const fee = data.get('fee')?.toString() ?? '';
		const clients = JSON.parse(data.get('clients').toString() ?? '') as dataObject[];
		const defendants = JSON.parse(data.get('defendants').toString() ?? '') as dataObject[];
		const classsuit = JSON.parse(data.get('class').toString() ?? '') as dataObject;

		const resp = await new LawsuitController().create({
			cnj: cnj,
			subject: subject,
			distributionDate: new Date(distributionDate),
			foro: foro,
			vara: vara,
			qualification: qualification.value,
			case_cost: parseFloat(cost_case),
			fee: parseFloat(fee),
			responsible: '',
			clients: clients.map((c) => {
				return {
					name: c.label,
					id: c.value
				};
			}),
			defendants: defendants.map((d) => {
				return {
					name: d.label,
					id: d.value
				};
			}),
			class: classsuit.value
		});
		if (resp.errorMessage) {
			const message = generateFriendlyMessage(resp.errorMessage);
			return { errormessage: message };
		} else {
			return { success: true };
		}
	}
};

export const load = async () => {
	const clientsTobeSelected = [];
	await getClients(clientsTobeSelected);
	const classsuits = await getClasssuits();
	const qualifications = await getQualifications();

	return {
		clientsTobeSelected: clientsTobeSelected,
		classsuits: classsuits,
		qualifications: qualifications
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

async function getClients(clientsTobeSelected: any[]) {
	const resp = await new ClientController().getClients();
	resp.forEach((client) => {
		clientsTobeSelected.push({
			value: client.id,
			label: client.name
		});
	});
}
