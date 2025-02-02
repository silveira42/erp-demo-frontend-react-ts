import { useContext } from 'AppContext';
import './styles.css';

export default function ThemeChooser() {
	const { theme } = useContext();

	return (
		<div className='theme-chooser' data-theme={theme.getCurrent()}>
			<img
				src={
					theme.getCurrent() === 'dark'
						? '/assets/icons/moon-white.svg'
						: '/assets/icons/sun-black.svg'
				}
				alt={theme.getCurrent() === 'dark' ? 'moon' : 'sun'}
			/>
			<input
				type='checkbox'
				id='theme-toggler'
				checked={theme.getCurrent() === 'light' ? true : false}
				readOnly={true}
			/>
			<label
				className='toggler'
				htmlFor='theme-toggler'
				onClick={() => theme.toggleTheme()}
			></label>
		</div>
	);
}
