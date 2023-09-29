export default class TaskStatus {
	public static readonly TODO: string = 'A fazer';
	public static readonly DOING: string = 'Em andamento';
	public static readonly CLIENT_SCHEDULING: string = 'Ag. Cliente';
	public static readonly PROVIDENCES_SCHEDULING: string = 'Ag. Providêcias';
	public static readonly CORRECTION: string = 'Corrigir';
	public static readonly DONE: string = 'Protocolar';
	public static readonly ARCHIVED: string = 'Arquivado';
	
	static validate(value: string): boolean {

		const wordsArray: string[] = Object.values(TaskStatus).filter((value) =>
  		typeof value === 'string'
		);
		return wordsArray.includes(value);
	}

}
