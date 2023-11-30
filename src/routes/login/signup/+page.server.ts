import { fail } from '@sveltejs/kit';
import { UserController } from '../../../api/controllers/user.controller';
import { createNewUserWithEmailAndPassword } from '../../../api/firebase/firebase-actions';


export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email')?.toString() ?? '';
		const name = data.get('name')?.toString() ?? '';
		name;
		const lastname = data.get('lastname')?.toString() ?? '';
		const oab = data.get('oab')?.toString() ?? '';
		const password = data.get('password')?.toString() ?? '';
		const confirmPassword = data.get('confirmPassword')?.toString() ?? '';
		if (password != confirmPassword) {
			return fail(404, { incorrect: true });
		} else {
			const isCreated = await new UserController().createUser({
				email: email,
				name: name,
				oab: oab,
				role: '',
				surname: lastname
			});
			if (isCreated) {
				const resp = await createNewUserWithEmailAndPassword(email, password);
				if (resp.status == 'fail') {
					return fail(404, { firebaseError: true });
				}
				return { success: true };
			}
		}
		return fail(404, { failure: true });
	}
};
