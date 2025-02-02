import './reset.css';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import privateRouter, { PrivateRouterProps } from 'routes/privateRouter';
import publicRouter from 'routes/publicRouter';
import { useAuth } from 'AuthContext';
import { useContext } from 'AppContext';

export default function App() {
	const { intl, theme } = useContext();
	const { isTokenValid } = useAuth();

	const privateRouterProps: PrivateRouterProps = {
		theme: theme.getCurrent(),
		dictionary: intl.getDictionary(),
	};

	if (isTokenValid) {
		return (
			<div>
				<RouterProvider router={privateRouter(privateRouterProps)} />
			</div>
		);
	}

	return (
		<div>
			<div>
				<RouterProvider router={publicRouter()} />
			</div>
		</div>
	);
}
