import React from 'react';
import './styles.css';
import { useContext } from 'AppContext';
import UserApi from 'api/UserApi';
import { useAuth } from 'AuthContext';

export default function Header() {
	const [isTitleLoading, setIsTitleLoading] = React.useState(true);
	const [userName, setUserTitle] = React.useState('Olá, usuário!');

	const { theme, intl } = useContext();
	const dictionary = intl.getDictionary();
	const { logout } = useAuth();

	const getUser = (): void => {
		setIsTitleLoading(true);
		UserApi.get()
			.then(response => setUserTitle(response.nickName))
			.catch(() => setUserTitle(dictionary.userName))
			.finally(() => setIsTitleLoading(false));
	};

	React.useEffect(() => {
		getUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onLogout = (): void => {
		logout();
	};

	return (
		<div className='header' data-theme={theme.getCurrent()}>
			<img
				className='header-icon'
				src={process.env.PUBLIC_URL + '/assets/placeholders/avatar.jpeg'}
				alt='icon'
				onClick={onLogout}
			/>
			{isTitleLoading ? (
				<h4>Loading...</h4>
			) : (
				<h4
					className='header-title'
					onClick={() =>
						intl.changeLanguage(intl.getLanguage() === 'en' ? 'pt_br' : 'en')
					}
				>{`${dictionary.greeting}, ${userName}!`}</h4>
			)}
		</div>
	);
}
