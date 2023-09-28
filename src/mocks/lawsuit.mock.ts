export const lawsuits = [
	{
		lawsuit_id: '1',
		cnj: '5019600-46.20000000000064',
		subject: 'Busca e apreenção de veiculos',
		class_suit: 'Procedimento Comum Cível',
		distribuition_date: new Date('25/09/2023'),
		phase: 'Conhecimento',
		foro: 'TJSC',
		vara: '1º vara civel da Comarca de paçhoça',
		clients: [
			{
				client_id: '1',
				name: 'XXXXXX',
				email: 'XXXXXX',
				phone: 'XXXXXX',
				legal_documents: [
					{
						type: 1,
						document_number: 'XXXXXX'
					},
					{
						type: 6,
						document_number: 'XXXXXX'
					}
				],
				address: [
					{
						address_id: '1',
						street: 'Rua inexistent',
						address_number: 25,
						city: 'Florianopolis',
						state: 'SC',
						country: 'Brasil',
						zip: '88030-000',
						description: 'Residencial'
					}
				],
				job_title: 'XXXXXX',
				nacionality: 'XXXXXX',
				marital_status: 'XXXXXX'
			}
		],
		qualification: 'Autor',
		defendant: [
			{
				client_id: '2',
				name: 'XXXXXX',
				email: 'XXXXXX',
				phone: 'XXXXXX',
				legal_documents: [
					{
						type: 1,
						document_number: 'XXXXXX'
					},
					{
						type: 6,
						document_number: 'XXXXXX'
					}
				],
				address: [
					{
						address_id: '1',
						street: 'Rua inexistent',
						address_number: 25,
						city: 'Florianopolis',
						state: 'SC',
						country: 'Brasil',
						zip: '88030-000',
						description: 'Residencial'
					}
				],
				job_title: 'XXXXXX',
				nacionality: 'XXXXXX',
				marital_status: 'XXXXXX'
			}
		],
		case_cost: 5000,
		events: [],
		tasks: []
	}
];
