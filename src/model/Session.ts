type SessionModel = {
	id: string;
	userid: string;
	token: string;
	retrievedAt: string;
	expiresAt: string;
	isActive: boolean;
};

export default SessionModel;
