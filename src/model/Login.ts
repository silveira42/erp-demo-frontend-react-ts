import { CredentialTypes } from './enums/CredentialTypes';

type LoginModel = {
	id: string;
	userid: string;
	credential?: string;
	type: CredentialTypes;
	key: string;
	createdAt: string;
	isArchived: boolean;
};

export default LoginModel;
