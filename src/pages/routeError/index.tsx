import './styles.css';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function RouteError() {
	const error = useRouteError();
	let errorMessage: string;

	if (isRouteErrorResponse(error)) {
		// error is type `ErrorResponse`
		errorMessage = error.data || error.statusText;
	} else if (error instanceof Error) {
		errorMessage = error.message;
	} else if (typeof error === 'string') {
		errorMessage = error;
	} else {
		console.error(error);
		errorMessage = 'Unknown error';
	}

	return (
		<div className='error-page'>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{errorMessage}</i>
			</p>
			<a href='/'>Go back to home</a>
		</div>
	);
}
