import { describe, test, expect } from 'vitest';
import User from './user';

describe('User Test', () => {
	test('should create a user', () => {
		const newUser = User.create({
			name: 'John Doe',
			email: 'XXXX@XXXX.com',
			role: 'admin'
		});

		expect(newUser.name).toBe('John Doe');
		expect(newUser.email).toBe('XXXX@XXXX.com');
		expect(newUser.role).toBe('admin');
	});
});
