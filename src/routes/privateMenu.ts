import { SidebarButtonProps } from 'components/shared/sidebarButton';
import Dictionary from 'context/dictionary/Type';

const menu = (dictionary: Dictionary, theme: string): SidebarButtonProps[] => {
	return [
		{
			title: dictionary.menu.dashboard,
			image:
				theme === 'dark'
					? '/assets/icons/dashboard-white.svg'
					: '/assets/icons/dashboard-black.svg',
			path: '/',
		},
	];
};

export default menu;
