import ProductModel from 'model/Product';
import privateClient from './privateClient';

export default class ProductApi {
	private static instance: ProductApi;

	private constructor() {}

	public static getInstance(): ProductApi {
		if (!ProductApi.instance) {
			ProductApi.instance = new ProductApi();
		}

		return ProductApi.instance;
	}

	public static async get(productId: string): Promise<ProductModel> {
		const endpoint = '/api/v1/products/' + productId;

		const options: RequestInit = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow',
		};

		try {
			return await privateClient<ProductModel>(endpoint, options);
		} catch (error) {
			throw error;
		}
	}

	public static async list(): Promise<ProductModel[]> {
		const endpoint = '/api/v1/products';

		const options: RequestInit = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow',
		};

		try {
			return privateClient<ProductModel[]>(endpoint, options);
		} catch (error) {
			throw error;
		}
	}

	public static async create(
		body: Partial<ProductModel>
	): Promise<ProductModel> {
		const endpoint = '/api/v1/products';

		const options: RequestInit = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow',
			body: JSON.stringify(body),
		};

		try {
			return await privateClient<ProductModel>(endpoint, options);
		} catch (error) {
			throw error;
		}
	}

	public static async update(
		id: string,
		body: Partial<ProductModel>
	): Promise<ProductModel> {
		const endpoint = `/api/v1/products/${id}`;

		const options: RequestInit = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow',
			body: JSON.stringify(body),
		};

		try {
			return await privateClient<ProductModel>(endpoint, options);
		} catch (error) {
			throw error;
		}
	}

	public static async delete(id: string): Promise<string> {
		const endpoint = `/api/v1/products/${id}`;

		const options: RequestInit = {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow',
		};

		try {
			return (await privateClient<ProductModel>(endpoint, options)).id || '0';
		} catch (error) {
			throw error;
		}
	}
}
