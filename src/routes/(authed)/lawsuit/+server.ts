import { LawsuitController } from '../../../api/controllers/lawsuit.controller';
import { generateFriendlyMessage } from '../../../api/helper';
import { json } from '@sveltejs/kit';
export async function POST() {
	try {
		const listLawsuits = await new LawsuitController().findAll();

		return json({ listLawsuits: listLawsuits });
	} catch (e) {
		const message = generateFriendlyMessage(e.message);
		return json({ error: message });
	}
}
