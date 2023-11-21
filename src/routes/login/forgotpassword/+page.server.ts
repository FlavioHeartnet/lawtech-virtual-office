import { redirect } from '@sveltejs/kit';

// *TODO: connect to firebase
export const actions = {
	default: async ({ cookies, url, request }) => {
		console.log('ola');
		throw redirect(302, '/');
	}
};
