import React from 'react';
import UserModel from 'model/User';
import UserApi from 'api/UserApi';

export const useUser = () => {
	const [currentUser, setCurrentUser] = React.useState<UserModel | null>(null);

	React.useEffect(() => {
		UserApi.get().then((user: UserModel) => {
			setCurrentUser(user);
		});
	}, []);

	return { currentUser };
};
