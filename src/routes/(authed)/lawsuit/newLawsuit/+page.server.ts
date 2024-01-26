import { fail } from '@sveltejs/kit';
import { ClientController } from '../../../../api/controllers/client.controller';
import { generateFriendlyMessage } from '../../../../api/helper';
import { LawsuitController } from '../../../../api/controllers/lawsuit.controller';
import Phase from '../../../../api/@core/entities/value-objects/phase';
// TODO find a way to have legal_documents and Address objects be stored here
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const cnj = data.get('cnj')?.toString() ?? '';
		const subject = data.get('subject')?.toString() ?? '';
		const distributionDate = data.get('distributionDate')?.toString() ?? '';
		const foro = data.get('foro')?.toString() ?? '';
		const vara = data.get('vara')?.toString() ?? '';
		const qualification = data.get('qualification')?.toString() ?? '';
		const cost_case = data.get('cost_case')?.toString() ?? '';
		const fee = data.get('fee')?.toString() ?? '';
		const clients = data.get('clients');
		const defendants = data.get('defendants');
		const classsuit = data.get('class').toString() ?? '';

		try {
			const resp = new LawsuitController().create({
				cnj: cnj,
				subject: subject,
				distributionDate: new Date(distributionDate),
				foro: foro,
				vara: vara,
				qualification: qualification,
				case_cost: parseFloat(cost_case),
				fee: parseFloat(fee),
				responsible: '',
				clients: [],
				defendants: [],
				class: classsuit,
			});
			if (resp) {
				return { success: true };
			}
		} catch (e) {
			const message = generateFriendlyMessage(e.message);
			return { errormessage: message };
		}

		return fail(404, { incorrect: true });
	}
};

export const load = async () => {
	const resp = await new ClientController().getClients();
	const respclasssuits = await new LawsuitController().getClassSuits();
	const clientsTobeSelected = [];
	const classsuits = [];
	respclasssuits.forEach((classsuit) => {
		classsuits.push({
			value: classsuit.class,
			label: classsuit.class
		});
	});
	resp.forEach((client) => {
		clientsTobeSelected.push({
			value: client.id,
			label: client.name
		});
	});

	return { clientsTobeSelected: clientsTobeSelected, classsuits: classsuits };
};
