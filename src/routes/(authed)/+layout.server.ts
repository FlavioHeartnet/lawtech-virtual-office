import { redirect } from '@sveltejs/kit';
export function load({ cookies, url }) {
	if (!cookies.get('logged_in') && !cookies.get('token')) {
		throw redirect(303, `/?redirectTo=${url.pathname}`);
	}
}
