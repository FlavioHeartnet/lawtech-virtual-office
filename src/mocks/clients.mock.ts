import Event, { eventType } from '../api/@core/entities/event';
import lawsuit from '../api/@core/entities/lawsuit/lawsuit';
import User from '../api/@core/entities/user';
import Address from '../api/@core/entities/value-objects/address/address';
import Uuuid from '../api/@core/entities/value-objects/uuid.vo';

export const clients = [
	{
		client_id: new Uuuid('e6c4d38b-7f45-4acb-bed7-464cce95d745'),
		name: 'José',
		email: 'XXXXXXXXXXXXXXX',
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
				description: 'Residencial'
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
		events: [
			Event.create({
				description: 'XXXXXX',
				date: new Date(),
				type: eventType.VIRTUAL,
				responsible: new User({ name: 'XXXXXXx', email: 'XXXXXXx', role: 'XXXXXXx' }),
				duration: new Date('25/09/2023'),
				event_class: ''
			}).toJSON()
		],
		tasks: []
	}
];
