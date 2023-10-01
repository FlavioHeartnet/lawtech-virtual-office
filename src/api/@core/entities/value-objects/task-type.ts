export default class TaskType {
	public static readonly INITIAL_PETITION: string = 'Petição inicial';
	public static readonly DEADLINE: string = 'Prazo';
	public static readonly EXTRAJUDICIAL: string = 'Extrajudicial';
	public static readonly OTHER: string = 'Outros';

	static validate(value: string): boolean {
		const wordsArray: string[] = Object.values(TaskType).filter(
			(value) => typeof value === 'string'
		);
		return wordsArray.includes(value);
	}
}
