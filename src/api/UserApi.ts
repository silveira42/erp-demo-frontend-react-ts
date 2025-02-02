import UserModel from 'model/User';
import privateClient from './privateClient';

export default class UserApi {
	private static instance: UserApi;

	private constructor() {}

	public static getInstance(): UserApi {
		if (!UserApi.instance) {
			UserApi.instance = new UserApi();
		}

		return UserApi.instance;
	}

	public static async get(): Promise<UserModel> {
		const endpoint = '/api/v1/users';

		const options: RequestInit = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow',
		};

		try {
			return await privateClient<UserModel>(endpoint, options);
		} catch (error) {
			throw error;
		}
	}
}
