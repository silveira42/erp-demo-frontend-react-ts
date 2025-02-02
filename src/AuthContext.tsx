import React from 'react';
import useLocalStorage from 'util/useLocalStorage';
import SessionApi, { ValidateTokenResponse } from 'api/SessionApi';
import SessionModel from 'model/Session';

const AuthContext = React.createContext({
	isTokenValid: false,
	token: '',
	updateToken: (token: string) => {},
	logout: () => {},
});

export const AuthContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [isTokenValid, setIsTokenValid] = React.useState(false);
	const [token, setToken] = useLocalStorage('token', '');

	const logout = (): void => {
		setToken('');
		setIsTokenValid(false);
	};

	const handleRefreshToken = (session: SessionModel): void => {
		// saving the new token
		setToken(session.token);
		// setting the token as valid
		setIsTokenValid(true);
	};

	const handleValidateToken = (
		response: ValidateTokenResponse
	): string | void => {
		if (response.valid) {
			setIsTokenValid(true);
		} else {
			setIsTokenValid(false);
			return response.error;
		}
	};

	// to be called from outside
	const updateToken = (token: string): void => {
		setToken(token);

		SessionApi.validateToken(token)
			.then(response => handleValidateToken(response))
			.catch(() => setIsTokenValid(false));
	};

	// to be called when the app starts
	const validateToken = (): void => {
		SessionApi.refreshToken()
			.then(response => handleRefreshToken(response))
			.catch(() => setIsTokenValid(false));
	};

	React.useEffect(() => {
		validateToken();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<AuthContext.Provider value={{ isTokenValid, token, updateToken, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => React.useContext(AuthContext);
