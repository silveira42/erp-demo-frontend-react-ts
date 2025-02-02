import './styles.css';
import SidebarButton, {
	SidebarButtonProps,
} from 'components/shared/sidebarButton';
import ThemeChooser from 'components/shared/themeChooser';
import { useContext } from 'AppContext';

export type SidebarProps = {
	buttons: SidebarButtonProps[];
};

export default function Sidebar(props: SidebarProps) {
	const { theme } = useContext();

	return (
		<div className='sidebar' data-theme={theme.getCurrent()}>
			<div className='sidebar-buttons'>
				{props.buttons.map((button, index) => {
					return (
						<SidebarButton
							key={index}
							title={button.title}
							image={button.image}
							path={button.path}
						/>
					);
				})}
			</div>
			<div className='sidebar-footer'>
				<ThemeChooser />
			</div>
		</div>
	);
}
