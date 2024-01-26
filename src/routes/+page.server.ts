import { redirect } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../api/firebase/firebaseconfig';

export const actions = {
	default: async ({ cookies, url, request }) => {
		const data = await request.formData();
		const email = data.get('email')?.toString() ?? '';
		const password = data.get('password')?.toString() ?? '';
		let token = '';
		let errors = ''
		await signInWithEmailAndPassword(auth, email, password)
			.then(async (userCredential) => {
				// Signed in
				const user = userCredential.user;
				token = await user.getIdToken();
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode + '  ' + errorMessage);
				errors = errorMessage;
			});
		if(errors){
			return fail(404, { connectionError: true });
		}	
		if (token) {
			cookies.set('logged_in', 'true', { path: '/' });
			cookies.set('token', token, { path: '/' });
			throw redirect(303, url.searchParams.get('redirectTo') ?? '/home');
		} else {
			return fail(404, { incorrect: true });
		}
	}
};
