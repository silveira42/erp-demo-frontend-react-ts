import LoginForm from 'components/account/loginForm';
import './styles.css';
import { redirect } from 'react-router-dom';
import SignupForm from 'components/account/signupForm';
import { useContext } from 'AppContext';

export default function Home() {
	const { theme } = useContext();

	redirect('/home');
	return (
		<div className='home' data-theme={theme.getCurrent()}>
			<h1>Welcome home!</h1>
			<LoginForm />
			<SignupForm />
		</div>
	);
}
