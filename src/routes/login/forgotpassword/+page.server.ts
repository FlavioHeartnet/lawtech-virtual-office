import { fail } from '@sveltejs/kit';
import { sendPasswordResetEmailFirebase } from '../../../api/firebase/firebase-actions';
export const actions = {
	default: async ({ cookies, url, request }) => {
        const data = await request.formData();
        const email = data.get('email')?.toString() ?? '';
        const resp = await sendPasswordResetEmailFirebase(email);
        if(resp.status == 'success'){
            return { success: true };
        }else{
            return fail(404, { incorrect: true });
        }
	}
};
