export interface IController<InputDto, OutputDto> {
	create(input: InputDto): OutputDto;
	update(input: InputDto, id: string): OutputDto;
	findOne(input: InputDto): OutputDto;
	findAll(): OutputDto[];
}
