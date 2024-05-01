import { LawsuitCreateUseCase } from '../@core/usecases/lawsuits/create-lawsuit.uc';
import { FindLawsuitByCnjUseCase } from '../@core/usecases/lawsuits/find-lawsuit-by-cnj.uc';
import { LawsuitFindAllUseCase } from '../@core/usecases/lawsuits/findAll-lawsuit.uc';
import { GetLawsuitQualifications } from '../@core/usecases/lawsuits/get-lawsuitQualifications';
import { GetLawsuitClass } from '../@core/usecases/lawsuits/get-lawsuitclass.uc';
import type { LawsuitOutputDto } from '../dto/lawsuit.dtos';
import type LawsuitDto from '../dto/lawsuit.dtos';

export class LawsuitController  {
	create(input: LawsuitDto): Promise<LawsuitOutputDto> {
		return new LawsuitCreateUseCase().execute(input);
	}
	update(input: LawsuitDto, id: string): Promise<LawsuitOutputDto> {
		throw new Error('Method not implemented.');
	}
	findOne(cnj: string): Promise<LawsuitOutputDto> {
		return new FindLawsuitByCnjUseCase().execute(cnj);
	}
	findAll(): Promise<LawsuitOutputDto[]> {
		return new LawsuitFindAllUseCase().execute();
	}
	getClassSuits() {
		const result = new GetLawsuitClass().execute();
		return Promise.resolve(result);
	}
	getQualifications() {
		const result = new GetLawsuitQualifications().execute();
		return Promise.resolve(result);
	}
}
