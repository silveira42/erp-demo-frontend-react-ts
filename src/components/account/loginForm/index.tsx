import React from 'react';
import './styles.css';
import CryptoJS from 'crypto-js';
import { useContext } from 'AppContext';
import SessionApi from 'api/SessionApi';
import LoginModel from 'model/Login';
import SessionModel from 'model/Session';
import { CredentialTypes } from 'model/enums/CredentialTypes';
import { useAuth } from 'AuthContext';

export default function LoginForm() {
	const [key, setKey] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState('');

	const { theme, intl } = useContext();
	const dictionary = intl.getDictionary();
	const { updateToken } = useAuth();

	const resetForm = () => {
		setKey('');
		setPassword('');
		setIsLoading(false);
		setError('');
	};

	const handleKeyChange = (e: any) => {
		const newKeyValue = e.target.value;

		setKey(newKeyValue);
	};

	const handlePasswordChange = (e: any) => {
		setPassword(e.target.value);
	};

	const handleLoginResponse = (response: SessionModel) => {
		updateToken(response.token);
	};

	const handleLogin = () => {
		const hashedPassword = CryptoJS.MD5(password).toString();

		const loginBody: Partial<LoginModel> = {
			key: key,
			credential: hashedPassword,
			type: CredentialTypes.LOGIN,
		};

		setIsLoading(true);

		SessionApi.login(loginBody).then(handleLoginResponse);

		setIsLoading(false);
	};

	if (isLoading) {
		return <div className='login'>{dictionary.loading}</div>;
	}

	if (error) {
		return (
			<div className='login'>
				<h4>{error}</h4>
				<button onClick={() => resetForm()}>{dictionary.close}</button>
			</div>
		);
	}

	return (
		<div className='login' data-theme={theme.getCurrent()}>
			<h3>{dictionary.welcomeBack}</h3>
			<input
				id='username'
				type='text'
				value={key}
				onChange={handleKeyChange}
				placeholder='youremail@example.com'
			/>
			<input
				id='password'
				type='password'
				value={password}
				onChange={handlePasswordChange}
				placeholder='yourpassword'
			/>
			<button onClick={() => handleLogin()}>{dictionary.login.self}</button>
		</div>
	);
}
