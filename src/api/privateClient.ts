export default async function privateClient<T>(
	endpoint: string,
	options: RequestInit
): Promise<T> {
	const baseUrl = process.env.REACT_APP_BACKEND_HOST;
	const token = JSON.parse(localStorage.getItem('token') || '');

	const fetchResponse = await fetch(baseUrl + endpoint, {
		...options,
		headers: {
			...options.headers,
			'Access-Token': token || '',
		},
	});

	const response = await fetchResponse.json();

	if (fetchResponse.status < 200 || fetchResponse.status >= 300) {
		throw new Error(response.error);
	}

	return response;
}
