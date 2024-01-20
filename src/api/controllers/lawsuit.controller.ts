import type { LawsuitOutputDto } from '../dto/lawsuit.dtos';
import type LawsuitDto from '../dto/lawsuit.dtos';
import type { IController } from './controller.interface';

export class LawsuitController implements IController<LawsuitDto, LawsuitOutputDto> {
	create(input: LawsuitDto): LawsuitOutputDto {
		throw new Error('Method not implemented.');
	}
	update(input: LawsuitDto, id: string): LawsuitOutputDto {
		throw new Error('Method not implemented.');
	}
	findOne(input: LawsuitDto): LawsuitOutputDto {
		throw new Error('Method not implemented.');
	}
	findAll(): LawsuitOutputDto[] {
		throw new Error('Method not implemented.');
	}
}
