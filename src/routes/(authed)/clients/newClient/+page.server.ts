import { fail } from '@sveltejs/kit';
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name')?.toString() ?? '';
		const email = data.get('email')?.toString() ?? '';
		const phone = data.get('phone')?.toString() ?? '';
		const addresses = data.get('addresses')?.toString() ?? '';
		const job_title = data.get('job_title')?.toString() ?? '';
		const nacionality = data.get('nacionality')?.toString() ?? '';
		const marital_status = data.get('marital_status')?.toString() ?? '';
	}
};
