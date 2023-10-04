import { describe, expect, test } from 'vitest';
import Moviment from './moviment';
import Court from '../value-objects/court';

describe('Moviment tests', () => {
	test('Should create a new moviment', () => {
		const newMoviment = Moviment.create({
			date: new Date(),
			description: 'Test',
			court: new Court('Vara', 'floa', 1, 'civel', 12)
		});
		expect(newMoviment).toBeInstanceOf(Moviment);
	});
});
