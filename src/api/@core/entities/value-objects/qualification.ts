export default class Qualification {
	public static readonly QUALIFICATION_AUTHOR = 'Autor';
	public static readonly QUALIFICATION_DEFENDANT = 'Réu';
	public static readonly QUALIFICATION_APPEALED = 'Recorrido';
	public static readonly QUALIFICATION_RECURRING = 'Recorrente';
	public static readonly QUALIFICATION_EXECUTED = 'Executado';
	public static readonly QUALIFICATION_EXECUTOR = 'Exequente';
	public static readonly QUALIFICATION_EMBARGOER = 'Embargante';
	public static readonly QUALIFICATION_EMBARGOED = 'Embargado';
	public static readonly QUALIFICATION_DISPUTE = 'Impugnante';

	static validate(value: string): boolean {
		const wordsArray: string[] = Object.values(Qualification).filter(
			(value) => typeof value === 'string'
		);
		return wordsArray.includes(value);
	}
}
