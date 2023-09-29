import type ValidatorInterface from '../../@shared/validator/validator.interface';
import ClassSuit from '../value-objects/lawsuit-class';
import type Lawsuit from './lawsuit';
import * as yup from 'yup';

export class LawsuitValidators implements ValidatorInterface<Lawsuit>{
	constructor() {}

	public validate(entity: Lawsuit): void {
		if (!this.validateCnj(entity.cnj)) {
			entity.notification.addError({context: "LAWSUIT", message: "Please provide an correct cnj"});
		}
        this.yupVelidator(entity);

        if (!ClassSuit.validate(entity.lawsuit_class)) {
            entity.notification.addError({context: "LAWSUIT", message: "Lawsuit class invalid"});
        }
	}


    private yupVelidator(entity: Lawsuit) {
        try {
            yup
                .object()
                .shape({
                    subject: yup.string().required("subject is required"),
                    distribution_date: yup.date().required("distribution_date is required"),
                })
                .validateSync(
                    {
                        subject: entity.subject,
                        distribution_date: entity.distribution_date,
                    },
                    {
                        abortEarly: false,
                    }
                );
        } catch (errors) {
            const e = errors as yup.ValidationError;
            e.errors.forEach((error) => {
                entity.notification.addError({
                    context: "LAWSUIT",
                    message: error,
                });
            });
        }
    }

	private validateCnj(cnj: string) {
		const pattern = /^(\d{7})-(\d{2}\.\d{14})$/;
		return pattern.test(cnj);
	}
}
