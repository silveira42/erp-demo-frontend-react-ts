import OrderModel from 'model/Order';
import privateClient from './privateClient';

export default class OrderApi {
	private static instance: OrderApi;

	private constructor() {}

	public static getInstance(): OrderApi {
		if (!OrderApi.instance) {
			OrderApi.instance = new OrderApi();
		}

		return OrderApi.instance;
	}

	public static async get(orderId: string): Promise<OrderModel> {
		const endpoint = '/api/v1/orders/' + orderId;

		const options: RequestInit = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow',
		};

		try {
			return await privateClient<OrderModel>(endpoint, options);
		} catch (error) {
			throw error;
		}
	}

	public static async list(): Promise<OrderModel[]> {
		const endpoint = '/api/v1/orders';

		const options: RequestInit = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow',
		};

		try {
			return privateClient<OrderModel[]>(endpoint, options);
		} catch (error) {
			throw error;
		}
	}

	public static async create(body: Partial<OrderModel>): Promise<OrderModel> {
		const endpoint = '/api/v1/orders';

		const options: RequestInit = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow',
			body: JSON.stringify(body),
		};

		try {
			return await privateClient<OrderModel>(endpoint, options);
		} catch (error) {
			throw error;
		}
	}

	public static async update(
		id: string,
		body: Partial<OrderModel>
	): Promise<OrderModel> {
		const endpoint = `/api/v1/orders/${id}`;

		const options: RequestInit = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow',
			body: JSON.stringify(body),
		};

		try {
			return await privateClient<OrderModel>(endpoint, options);
		} catch (error) {
			throw error;
		}
	}

	public static async delete(id: string): Promise<string> {
		const endpoint = `/api/v1/orders/${id}`;

		const options: RequestInit = {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow',
		};

		try {
			return (await privateClient<OrderModel>(endpoint, options)).id || '0';
		} catch (error) {
			throw error;
		}
	}
}
