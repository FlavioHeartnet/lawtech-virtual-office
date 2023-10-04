import type Moviment from './moviment'
import type ValidatorInterface from './../../@shared/validator/validator.interface'
import MovimentValidation from './moviment.validation'
export class MovimentValidatorFactory {
  static create(): ValidatorInterface<Moviment>{
      return new MovimentValidation();
  }

}
