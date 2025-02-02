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
		{
			title: dictionary.menu.products,
			image:
				theme === 'dark'
					? '/assets/icons/dashboard-white.svg'
					: '/assets/icons/dashboard-black.svg',
			path: '/products',
		},
		{
			title: dictionary.menu.orders,
			image:
				theme === 'dark'
					? '/assets/icons/dashboard-white.svg'
					: '/assets/icons/dashboard-black.svg',
			path: '/orders',
		},
		{
			title: dictionary.menu.settings,
			image:
				theme === 'dark'
					? '/assets/icons/settings-white.svg'
					: '/assets/icons/settings-black.svg',
			path: '/settings',
		},
	];
};

export default menu;
