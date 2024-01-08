import { ClientController } from '../../../api/controllers/client.controller';
import { generateFriendlyMessage } from '../../../api/helper';
import { json } from '@sveltejs/kit';
export async function POST() {
	try {
		const listClients = await new ClientController().getClients();
		// const listClients = [
		// 	{ name: "John Doe", legal_documents: [{ document_number: "000.000.000-00", type: 1 }], email: "john@example.com", phone: "123-456-7890" },
		// 	{ name: "Jane Smith", legal_documents: [{ document_number: "111.111.111-11", type: 2 }], email: "jane@example.com", phone: "987-654-3210" },
		// 	{ name: "Bob Johnson", legal_documents: [{ document_number: "222.222.222-22", type: 3 }], email: "bob@example.com", phone: "555-123-4567" },
		// 	{ name: "Alice Williams", legal_documents: [{ document_number: "333.333.333-33", type: 4 }], email: "alice@example.com", phone: "777-888-9999" },
		// 	{ name: "Charlie Brown", legal_documents: [{ document_number: "444.444.444-44", type: 5 }], email: "charlie@example.com", phone: "111-222-3333" },
		// 	{ name: "Eva Davis", legal_documents: [{ document_number: "555.555.555-55", type: 6 }], email: "eva@example.com", phone: "444-555-6666" },
		// 	{ name: "Frank Miller", legal_documents: [{ document_number: "666.666.666-66", type: 1 }], email: "frank@example.com", phone: "999-888-7777" },
		// 	{ name: "Grace Lee", legal_documents: [{ document_number: "777.777.777-77", type: 2 }], email: "grace@example.com", phone: "333-444-5555" },
		// 	{ name: "Henry Wilson", legal_documents: [{ document_number: "888.888.888-88", type: 3 }], email: "henry@example.com", phone: "222-111-9999" },
		// 	{ name: "Ivy Turner", legal_documents: [{ document_number: "999.999.999-99", type: 4 }], email: "ivy@example.com", phone: "666-777-8888" },
		// 	{ name: "Jack Robinson", legal_documents: [{ document_number: "123.456.789-00", type: 5 }], email: "jack@example.com", phone: "444-333-2222" },
		// 	{ name: "Karen Martin", legal_documents: [{ document_number: "987.654.321-00", type: 6 }], email: "karen@example.com", phone: "111-999-8888" },
		// 	{ name: "Leo Harris", legal_documents: [{ document_number: "111.222.333-44", type: 1 }], email: "leo@example.com", phone: "555-666-7777" },
		// 	{ name: "Mia Turner", legal_documents: [{ document_number: "444.555.666-77", type: 2 }], email: "mia@example.com", phone: "888-777-6666" },
		// 	{ name: "Nathan Brown", legal_documents: [{ document_number: "777.888.999-00", type: 3 }], email: "nathan@example.com", phone: "222-333-4444" },
		// 	{ name: "Olivia White", legal_documents: [{ document_number: "123.456.789-11", type: 4 }], email: "olivia@example.com", phone: "999-111-2222" },
		// 	{ name: "Paula Davis", legal_documents: [{ document_number: "987.654.321-22", type: 5 }], email: "paula@example.com", phone: "444-555-8888" },
		// 	{ name: "Quincy Miller", legal_documents: [{ document_number: "111.222.333-33", type: 6 }], email: "quincy@example.com", phone: "777-666-5555" },
		// 	{ name: "Randy Johnson", legal_documents: [{ document_number: "444.555.666-44", type: 1 }], email: "randy@example.com", phone: "888-777-4444" },
		// 	{ name: "Sara Wilson", legal_documents: [{ document_number: "777.888.999-55", type: 2 }], email: "sara@example.com", phone: "333-444-5555" },
		//   ];
		return json({ listClients: listClients });
	} catch (e) {
		const message = generateFriendlyMessage(e.message);
		return json({ error: message });
	}

}
