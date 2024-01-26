import { LawsuitCreateUseCase } from '../@core/usecases/lawsuits/create-lawsuit.uc';
import { GetLawsuitClass } from '../@core/usecases/lawsuits/get-lawsuitclass.uc';
import type { LawsuitOutputDto } from '../dto/lawsuit.dtos';
import type LawsuitDto from '../dto/lawsuit.dtos';
import type { IController } from './controller.interface';

export class LawsuitController implements IController<LawsuitDto, LawsuitOutputDto> {
	async create(input: LawsuitDto): Promise<boolean> {
		return await new LawsuitCreateUseCase().execute(input); 
	}
	update(input: LawsuitDto, id: string): Promise<LawsuitOutputDto> {
		throw new Error('Method not implemented.');
	}
	findOne(input: LawsuitDto): Promise<LawsuitOutputDto> {
		throw new Error('Method not implemented.');
	}
	findAll(): Promise<LawsuitOutputDto[]> {
		throw new Error('Method not implemented.');
	}
	getClassSuits() {
		const result = new GetLawsuitClass().execute();
		return Promise.resolve(result);
	}
}
