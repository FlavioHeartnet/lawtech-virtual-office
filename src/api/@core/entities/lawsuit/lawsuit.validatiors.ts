import type ValidatorInterface from '../../@shared/validator/validator.interface';
import ClassSuit from '../value-objects/lawsuit-class';
import Phase from '../value-objects/phase';
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

        if(!Phase.validate(entity.phase)) {
            entity.notification.addError({context: "LAWSUIT", message: "Phase invalid"});
        }
	
}

    private yupVelidator(entity: Lawsuit) {
        try {
            yup
                .object()
                .shape({
                    subject: yup.string().required("subject is required"),
                    distribution_date: yup.date().required("distribution_date is required"),
                    phase: yup.string().required("phase is required"),
                    foro: yup.string().required("foro is required"),
                    vara: yup.string().required("vara is required"),
                    clients: yup.array().required("Client is required").min(1),
                })
                .validateSync(
                    {
                        subject: entity.subject,
                        distribution_date: entity.distribution_date,
                        phase: entity.phase,
                        foro: entity.foro,
                        vara: entity.vara,
                        clients: entity.clients,
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
