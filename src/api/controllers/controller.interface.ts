export interface IController<InputDto, OutputDto> {
	create(input: InputDto):Promise<OutputDto>;
	update(input: InputDto, id: string): Promise<OutputDto>;
	findOne(input: InputDto): Promise<OutputDto>;
	findAll(): Promise<OutputDto[]>;
}
