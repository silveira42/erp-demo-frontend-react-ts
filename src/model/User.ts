import LoginModel from './Login';

type UserModel = {
	id: string;
	fullName: string;
	nickName: string;
	gender: number;
	type: number;
	dateOfBirth: string;
	jsonSettings: string;
	createdAt: string;
	updatedAt: string;
	isArchived: boolean;
	logins: LoginModel[];
};

export default UserModel;
