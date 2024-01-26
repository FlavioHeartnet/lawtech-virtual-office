export interface IUseCase<Input, Output> {
	execute(input: Input): Promise<Output>;
}

export interface IUseCaseGet<Output> {
	execute(): Promise<Output>;
}
