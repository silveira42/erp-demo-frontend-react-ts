import { CredentialTypes } from './enums/CredentialTypes';
import { GenderTypes } from './enums/GenderTypes';
import { LoginTypes } from './enums/LoginTypes';

type SignupModel = {
	fullName: string;
	nickName: string;
	fiscalId: string;
	dateOfBirth: string;
	gender: GenderTypes;
	credential: string;
	credentialType: CredentialTypes;
	login: string;
	loginType: LoginTypes;
};

export default SignupModel;
