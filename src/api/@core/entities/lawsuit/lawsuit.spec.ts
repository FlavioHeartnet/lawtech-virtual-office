 import { describe, expect, test } from 'vitest';
import Lawsuit from './lawsuit';
import Phase from '../value-objects/phase';
import ClassSuit from '../value-objects/lawsuit-class';

describe('lawsuit tests', () => {
	test('create a lawsuit', () => {
		const lawsuit = Lawsuit.create({
			cnj: '5019600-46.20000000000064',
			phase: Phase.ACKNOWLEDGE,
            subject: 'Alimenticio',
            lawsuit_class: ClassSuit.ADMINISTRATIVE_SUIT,
            distribution_date: new Date(),
            foro: 'Foro de teste',
		});
		expect(lawsuit).toBeInstanceOf(Lawsuit);
	});
});
