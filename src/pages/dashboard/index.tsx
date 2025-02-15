import { useContext } from 'AppContext';
import './styles.css';

export default function Dashboard() {
	const { theme } = useContext();

	return (
		<div className='container dashboard' data-theme={theme.getCurrent()}>
			<h1>Bem vindo ao ERP</h1>
		</div>
	);
}
