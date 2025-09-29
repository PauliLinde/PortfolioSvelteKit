import { type Actions, fail } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const message = formData.get('message') as string;

		if (!email || !message) {
			return fail(400, { error: 'Email and message are required' });
		}

		try {
			const response = await fetch('http://myportfolio.eu-north-1.elasticbeanstalk.com/newMessage', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					message
				}),
			});

			if (!response.ok) {
				const errorData = await response.json();
				return fail(response.status, { error: errorData.error || 'Server error' });
			}

			const result = await response.json();

			if (result.success) {
				return { success: true, message: 'Message sent successfully!' };
			} else {
				return fail(500, { error: 'Failed to save message' });
			}

		} catch (error) {
			console.error('Fetch error:', error);
			return fail(500, { error: 'Network error - could not connect to server' });
		}
	}
};