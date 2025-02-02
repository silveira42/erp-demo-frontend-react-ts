export default async function publicClient<T>(
	endpoint: string,
	options: RequestInit
): Promise<T> {
	const baseUrl = process.env.REACT_APP_BACKEND_HOST;

	const fetchResponse = await fetch(baseUrl + endpoint, {
		...options,
	});

	const response = await fetchResponse.json();

	if (fetchResponse.status < 200 || fetchResponse.status >= 300) {
		throw new Error(response.error);
	}

	return response;
}
