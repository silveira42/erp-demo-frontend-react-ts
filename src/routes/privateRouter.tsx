import PrivateRoot from 'pages/privateRoot';
import RouteError from 'pages/routeError';
import Settings from 'pages/settings';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import menu from './privateMenu';
import Dashboard from 'pages/dashboard';
import Dictionary from 'context/dictionary/Type';

export type PrivateRouterProps = {
	theme: string;
	dictionary: Dictionary;
};

export default function privateRouter(props: PrivateRouterProps) {
	return createBrowserRouter([
		{
			path: '/home',
			element: <Navigate to={'/'} />,
			errorElement: <RouteError />,
		},
		{
			path: '',
			element: <PrivateRoot buttons={menu(props.dictionary, props.theme)} />,
			errorElement: <RouteError />,
			children: [
				{
					index: true,
					path: '',
					element: <Dashboard />,
				},
				{
					path: 'settings',
					element: <Settings />,
				},
			],
		},
	]);
}
