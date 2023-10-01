export default class Phase {
	static readonly ACKNOWLEDGE = 'Conhecimento';
	static readonly APPEAL = 'Recursal';
	static readonly SENTENSE_EXECUTION = 'Execução e Cumprimento de sentença';

	static validate(value: string): boolean {
		const wordsArray: string[] = Object.values(Phase).filter((value) => typeof value === 'string');
		return wordsArray.includes(value);
	}
}
