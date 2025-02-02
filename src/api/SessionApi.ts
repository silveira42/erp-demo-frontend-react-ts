import LoginModel from 'model/Login';
import privateClient from './privateClient';
import SessionModel from 'model/Session';
import SignupModel from 'model/Signup';
import publicClient from './publicClient';

export type ValidateTokenResponse = {
	valid: boolean;
	error: string;
};

export default class SessionApi {
	private static instance: SessionApi;

	private constructor() {}

	public static getInstance(): SessionApi {
		if (!SessionApi.instance) {
			SessionApi.instance = new SessionApi();
		}

		return SessionApi.instance;
	}

	public static async login(login: Partial<LoginModel>): Promise<SessionModel> {
		const endpoint = '/api/v1/public/session/login';

		const options: RequestInit = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow',
			body: JSON.stringify(login),
		};

		try {
			return await privateClient<SessionModel>(endpoint, options);
		} catch (error) {
			throw error;
		}
	}

	public static async signup(body: SignupModel): Promise<SessionModel> {
		const endpoint = '/api/v1/public/session/signup';

		const options: RequestInit = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow',
			body: JSON.stringify(body),
		};

		try {
			return await privateClient<SessionModel>(endpoint, options);
		} catch (error) {
			throw error;
		}
	}

	public static async validateToken(
		token: string
	): Promise<ValidateTokenResponse> {
		const endpoint = `/api/v1/public/session/validateToken`;

		const options: RequestInit = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Access-Token': token,
			},
			redirect: 'follow',
		};

		try {
			return await publicClient<ValidateTokenResponse>(endpoint, options);
		} catch (error) {
			throw error;
		}
	}

	public static async refreshToken(): Promise<SessionModel> {
		const endpoint = `/api/v1/public/session/refreshToken`;

		const options: RequestInit = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow',
		};

		try {
			return await privateClient<SessionModel>(endpoint, options);
		} catch (error) {
			throw error;
		}
	}
}
