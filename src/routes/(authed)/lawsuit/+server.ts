import { LawsuitController } from '../../../api/controllers/lawsuit.controller';
import { generateFriendlyMessage } from '../../../api/helper';
import { json } from '@sveltejs/kit';
export async function POST() {
	try {
		//const listLawsuits = await new LawsuitController().findAll();
		const listLawsuits = [
			{
				cnj: "5025423-30.2023.8.24.0064",
				clients: [
				  { name: "John Doe", id: 1 },
				  { name: "Jane Smith", id: 2 },
				  { name: "Bob Johnson", id: 3 },
				],
				lawyers: [
				  { name: "Jane Doe", id: 1 },
				  { name: "John Smith", id: 2 },
				],
				subject: "Crime against humanity",
				defendants: [
				  { name: "Jane Doe", id: 1 },
				],
			  },
			  {
				cnj: "1234567-45.2023.8.24.0064",
				clients: [
				  { name: "Alice Williams", id: 4 },
				  { name: "Charlie Brown", id: 5 },
				],
				lawyers: [
				  { name: "Bob Johnson", id: 3 },
				  { name: "Grace Lee", id: 6 },
				],
				subject: "Financial Fraud",
				defendants: [
				  { name: "Alice Williams", id: 4 },
				],
			  },
			  {
				cnj: "9876543-21.2023.8.24.0064",
				clients: [
				  { name: "Eva Davis", id: 7 },
				  { name: "Frank Miller", id: 8 },
				],
				lawyers: [
				  { name: "Grace Lee", id: 6 },
				  { name: "Henry Wilson", id: 9 },
				],
				subject: "Intellectual Property Theft",
				defendants: [
				  { name: "Frank Miller", id: 8 },
				],
			  },
		];
		return json({ listLawsuits: listLawsuits });
	} catch (e) {
		const message = generateFriendlyMessage(e.message);
		return json({ error: message });
	}

}
