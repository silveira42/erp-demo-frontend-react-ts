import Dictionary from 'context/dictionary/Type';

const enDictionary: Dictionary = {
	or: 'or',
	and: 'and',
	greeting: 'Hello',
	userName: 'User',
	close: 'Close',
	welcomeBack: 'Welcome back!',
	welcome: 'Welcome!',
	loading: 'Loading...',
	signup: {
		self: 'Signup',
		action: 'Sign up',
		fullName: 'Full name',
		nickName: 'Nickname',
		fiscalId: 'Fiscal ID',
		dateOfBirth: 'Date of birth',
		email: 'E-mail',
		password: 'Password',
		phone: 'Phone',
		username: 'Username',
		gender: {
			self: 'Gender',
			notDeclared: 'Not declared',
			nonBinary: 'Non binary',
			male: 'Male',
			female: 'Female',
		},
	},
	login: {
		self: 'Login',
	},
	menu: {
		dashboard: 'Dashboard',
		settings: 'Settings',
	},
};

export default enDictionary;
