export default class ClassSuit {
	static readonly COMMON_CIVIL_PROCEDURE = 'Procedimento Comum Cível';
	static readonly COMMON_LISTING = 'Arrolamento comum';
	static readonly JUDICIAL_USUCAPTION = 'Usocapião judicial';
	static readonly CRIMINAL_ACTION = 'Ação penal';
	static readonly POSSESSORY_ACTIONS = 'Ações possessórias';
	static readonly EXECUTION_OF_SENTENCE = 'Cumprimento de sentença';
	static readonly EVICTION = 'Despejo';
	static readonly DIVORCE = 'Divórcio';
	static readonly THIRDPARTY_EMBARGOES = 'Embargos de terceiros';
	static readonly EXECUTION_EMBARGOES = 'Embargos de execução';
	static readonly TAX_ENFORCEMENT = 'Execução fiscal';
	static readonly EXECUTION_EXTRAJUDICIAL_EXECUTIVE_TITLE =
		'Execução de titulo executivo extrajudicial';
	static readonly BANKRUPTCY = 'Falência';
	static readonly CREDIT_QUALIFICATION = 'Habilitação de crédito';
	static readonly GUARD_AND_FAMILY = 'Guarda e família';
	static readonly IMMISSION_IN_POSSESSION = 'Imissão na posse';
	static readonly CHALLENGE_TO_COMPLIANCE_WITH_SENTENCE = 'Impugnação ao cumprimento de sentença';
	static readonly DECONVICTION_INCIDENT = 'Incidente de desconsideração da personalidade jurídica';
	static readonly POLICE_INVESTIGATION = 'Inquérito policial';
	static readonly PROHIBITORY_INVESTIGATION = 'Inquérito proibitorio';
	static readonly INVENTORY = 'Inventário';
	static readonly SPECIAL_COURT = 'Juizado especial da fazenda pública';
	static readonly VOLUNTARY_JURISDICTION = 'Jurisdição voluntária';
	static readonly WRIT_OF_MANDAMUS = 'Mandado de segurança';
	static readonly URGENT_PROTECTIVE_MEASURES = 'Medidas protetivas de urgência';
	static readonly MONITORING = 'Monitória';
	static readonly ADVANCE_PRODUCTION_OF_PROOF = 'Produção antecipada de prova';
	static readonly RECOGNITION_AND_TERMINATION_OF_STABLE_UNION =
		'Reconhecimento e extinção de união estavel';
	static readonly CIVIL_APPEAL = 'Recurso Cível';
	static readonly TESTAMENT = 'Testamento';
	static readonly SPECIAL_JURISDICTION = 'Juizado especial cível';
	static readonly LABOR_COMPLAINT = 'Reclamatória trabalhista';
	static readonly FOOD = 'Alimentos';
	static readonly INSTRUMENT_APPEAL = 'Agravo de instrumento';
	static readonly PRECAUTIONARY_PROTECTION = 'Tutela cautelar antecedente';
	static readonly ADMINISTRATIVE_SUIT = 'Processo administrativo';

	static validate(value: string): boolean {
		const wordsArray: string[] = Object.values(ClassSuit).filter((value) =>
  		typeof value === 'string'
		);
		return wordsArray.includes(value);
	}
}
