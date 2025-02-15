import { useContext } from 'AppContext';
import './styles.css';

export default function Settings() {
	const { theme } = useContext();

	return (
		<div className='container settings' data-theme={theme.getCurrent()}>
			<h1>Configurações</h1>
		</div>
	);
}
