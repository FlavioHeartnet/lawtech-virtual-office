import { fail } from '@sveltejs/kit';
import { sendPasswordResetEmailFirebase } from '../../../api/firebase/firebase-actions';
import { UserController } from '../../../api/controllers/user.controller';
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email')?.toString() ?? '';
		//TODO need to check if the email exist in the firebase first
		const isEmailExists = await new UserController().getUserByEmail(email);
		if(isEmailExists){
			const resp = await sendPasswordResetEmailFirebase(email);
			if (resp.status == 'success') {
				return { success: true };
			} else {
				return fail(404, { incorrect: true });
			}
		}else{
			return fail(404, { notExist: true });
		}
	}
};


