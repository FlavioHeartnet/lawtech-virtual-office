 import { describe, expect, test } from 'vitest';
import Lawsuit from './lawsuit';
import Phase from '../value-objects/phase';

describe('lawsuit tests', () => {
	test('create a lawsuit', () => {
		const lawsuit = Lawsuit.create({
			cnj: '5400',
			phase: Phase.ACKNOWLEDGE,
		});
		expect(lawsuit).toBeInstanceOf(Lawsuit);
	});
});
