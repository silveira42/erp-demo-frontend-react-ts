import Home from 'pages/home';
import RouteError from 'pages/routeError';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export default function publicRouter() {
	return createBrowserRouter([
		{
			path: '*',
			element: <Navigate to={'/home'} />,
			errorElement: <RouteError />,
		},
		{
			path: '/home',
			element: <Home />,
			errorElement: <RouteError />,
		},
	]);
}
