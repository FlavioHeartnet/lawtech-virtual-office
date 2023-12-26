import { fail } from '@sveltejs/kit';
import { UserController } from '../../../api/controllers/user.controller';
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email')?.toString() ?? '';
		const resp = await new UserController().forgotPassword(email);
		if (resp.status == 'already-exists') {
			return fail(404, { notExist: true });
		}
		if (resp.status == 'success') {
			return { success: true };
		}

		return fail(404, { incorrect: true });
	}
};
