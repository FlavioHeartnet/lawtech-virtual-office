export interface IController<InputDto, OutputDto> {
	create(input: InputDto):Promise<boolean>;
	update(input: InputDto, id: string): Promise<OutputDto>;
	findOne(input: InputDto): Promise<OutputDto>;
	findAll(): Promise<OutputDto[]>;
}
