import { Link } from 'react-router-dom';
import './styles.css';
import { useContext } from 'AppContext';

export type SidebarButtonProps = {
	title: string;
	image: string;
	path: string;
};

export default function SidebarButton(props: SidebarButtonProps) {
	const { theme } = useContext();

	return (
		<div className='sidebar-button' data-theme={theme.getCurrent()}>
			<Link className='sidebar-button-link' to={props.path}>
				<img
					className='sidebar-icon'
					src={process.env.PUBLIC_URL + props.image}
					alt={props.title}
				/>
				<h4>{props.title}</h4>
			</Link>
		</div>
	);
}
