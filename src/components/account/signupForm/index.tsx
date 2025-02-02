import React from 'react';
import './styles.css';
import { LoginTypes } from 'model/enums/LoginTypes';
import CryptoJS from 'crypto-js';
import validateEmail from 'util/validateEmail';
import validateOnlyNumbers from 'util/validateOnlyNumbers';
import { GenderTypes } from 'model/enums/GenderTypes';
import { useContext } from 'AppContext';
import SessionApi from 'api/SessionApi';
import SignupModel from 'model/Signup';
import SessionModel from 'model/Session';
import { CredentialTypes } from 'model/enums/CredentialTypes';
import { useAuth } from 'AuthContext';

export default function SignupForm() {
	const [key, setKey] = React.useState('');
	const [fullName, setFullName] = React.useState('');
	const [nickName, setNickName] = React.useState('');
	const [fiscalId, setFiscalId] = React.useState('');
	const [dateOfBirth, setDateOfBirth] = React.useState('');
	const [gender, setGender] = React.useState(GenderTypes.notDeclared);
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

	const handleSignupResponse = (response: SessionModel) => {
		updateToken(response.token);
	};

	const handleSignup = () => {
		let keyType = LoginTypes.EMAIL;
		if (validateEmail(key)) {
			keyType = LoginTypes.EMAIL;
		} else if (validateOnlyNumbers(key)) {
			keyType = LoginTypes.PHONE;
		} else {
			keyType = LoginTypes.USERNAME;
		}

		const hashedPassword = CryptoJS.MD5(password).toString();

		const signupBody: SignupModel = {
			fullName,
			nickName,
			fiscalId,
			dateOfBirth,
			gender,
			login: key,
			credential: hashedPassword,
			loginType: keyType,
			credentialType: CredentialTypes.LOGIN,
		};

		setIsLoading(true);

		SessionApi.signup(signupBody).then(handleSignupResponse);

		setIsLoading(false);
	};

	if (isLoading) {
		return <div className='signup'>{dictionary.loading}</div>;
	}

	if (error !== '') {
		return (
			<div className='signup'>
				<h4>{error}</h4>
				<button onClick={() => resetForm()}>{dictionary.close}</button>
			</div>
		);
	}

	return (
		<div className='signup' data-theme={theme.getCurrent()}>
			<h3>{dictionary.welcome}</h3>
			<label htmlFor='fullName'>{dictionary.signup.fullName}</label>
			<input
				id='fullName'
				type='text'
				value={fullName}
				onChange={e => setFullName(e.target.value)}
				placeholder='João da Silva'
			/>
			<label htmlFor='nickName'>{dictionary.signup.nickName}</label>
			<input
				id='nickName'
				type='text'
				value={nickName}
				onChange={e => setNickName(e.target.value)}
				placeholder='João'
			/>
			<label htmlFor='fiscalId'>{dictionary.signup.fiscalId}</label>
			<input
				id='fiscalId'
				type='text'
				value={fiscalId}
				onChange={e => setFiscalId(e.target.value)}
				placeholder='123.456.789-00'
			/>
			<label htmlFor='dateOfBirth'>{dictionary.signup.dateOfBirth}</label>
			<input
				id='dateOfBirth'
				type='date'
				value={dateOfBirth}
				onChange={e => setDateOfBirth(e.target.value)}
				placeholder='2000-12-31'
			/>
			<label htmlFor='gender' />
			<select id='gender'>
				<option
					id='notDeclared'
					value={'notDeclared'}
					onChange={e => setGender(GenderTypes.notDeclared)}
				>
					{dictionary.signup.gender.notDeclared}
				</option>
				<option
					id='nonBinary'
					value={'nonBinary'}
					onChange={e => setGender(GenderTypes.nonBinary)}
				>
					{dictionary.signup.gender.nonBinary}
				</option>
				<option
					id='man'
					value={'man'}
					onChange={e => setGender(GenderTypes.man)}
				>
					{dictionary.signup.gender.male}
				</option>
				<option
					id='woman'
					value={'woman'}
					onChange={e => setGender(GenderTypes.woman)}
				>
					{dictionary.signup.gender.female}
				</option>
			</select>
			<label htmlFor='key'>{`${
				dictionary.signup.email
			}, ${dictionary.signup.username.toLowerCase()} ${
				dictionary.or
			} ${dictionary.signup.phone.toLowerCase()}`}</label>
			<input
				id='key'
				type='text'
				value={key}
				onChange={handleKeyChange}
				placeholder='youremail@example.com'
			/>
			<label htmlFor='password'>{dictionary.signup.password}</label>
			<input
				id='password'
				type='password'
				value={password}
				onChange={handlePasswordChange}
				placeholder='yourpassword'
			/>
			<button onClick={() => handleSignup()}>{dictionary.signup.action}</button>
		</div>
	);
}
