import Address from '../api/@core/entities/value-objects/address/address';
import Uuuid from '../api/@core/entities/value-objects/uuid.vo';

export const clients = [
	{
		client_id: new Uuuid('e6c4d38b-7f45-4acb-bed7-464cce95d745'),
		name: 'José',
		email: 'email@email.com',
		phone: 'XXXXXXXXXXXXXXX',
		legal_documents: [
			{
				type: 1,
				document_number: 'XXXXXX'
			}
		],
		addresses: [
			Address.create({
				street: 'Rua inexistent',
				address_number: 25,
				city: 'Florianopolis',
				state: 'SC',
				country: 'Brasil',
				zip: '88030-000',
				description: 'Residencial',
				complement: ''
			}).displayAddress()
		],
		job_title: 'XXXXXX',
		nacionality: 'XXXXXX',
		marital_status: 'XXXXXX',
		lawsuits: [
			{ cnj: '5019600-46.20000000000064 ' },
			{ cnj: '5019600-46.20000000000064 ' },
			{ cnj: '5019600-46.20000000000064 ' }
		],
		tasks: []
	}
];
