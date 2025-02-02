import Sidebar from 'components/shared/sidebar';
import './styles.css';
import { Outlet } from 'react-router-dom';
import Header from 'components/shared/header';
import { SidebarButtonProps } from 'components/shared/sidebarButton';

export type PrivateRootProps = {
	buttons: SidebarButtonProps[];
};

export default function PrivateRoot(props: PrivateRootProps) {
	return (
		<div className='root'>
			<Sidebar buttons={props.buttons} />
			<div className='main'>
				<Header />
				<Outlet />
			</div>
		</div>
	);
}
