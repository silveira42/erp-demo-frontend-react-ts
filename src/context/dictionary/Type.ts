type Dictionary = {
	or: string;
	and: string;
	greeting: string;
	userName: string;
	close: string;
	welcomeBack: string;
	welcome: string;
	loading: string;
	signup: {
		self: string;
		action: string;
		fullName: string;
		nickName: string;
		fiscalId: string;
		dateOfBirth: string;
		email: string;
		password: string;
		phone: string;
		username: string;
		gender: {
			self: string;
			notDeclared: string;
			nonBinary: string;
			male: string;
			female: string;
		};
	};
	login: {
		self: string;
	};
	menu: {
		dashboard: string;
		settings: string;
		products: string;
		orders: string;
	};
	product: {
		self: string;
		title: string;
		description: string;
		price: string;
		thumbnail: string;
	};
};

export default Dictionary;
