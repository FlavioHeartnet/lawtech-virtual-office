import { redirect } from '@sveltejs/kit';
import { googleSignOut } from './../../../api/firebase/firebase-actions';

export const actions = {
	default: async ({ cookies }) => {
		await googleSignOut();
		cookies.delete('logged_in', { path: '/' });
		cookies.delete('token', { path: '/' });
		throw redirect(303, '/');
	}
};
