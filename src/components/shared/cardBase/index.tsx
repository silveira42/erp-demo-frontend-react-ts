import './styles.css';
import { useContext } from 'AppContext';

export type CardBaseProps = {
	className?: string;
	id?: string;
	onClick?: () => void;
	children?: React.ReactNode;
	isLoading?: boolean;
};

export default function CardBase(props: CardBaseProps) {
	const { theme } = useContext();

	if (props.isLoading) {
		return (
			<div className='card-base' data-theme={theme.getCurrent()}>
				<div>
					<div className='infinite-loader'></div>
				</div>
				<div className='card-block'>
					<div className='infinite-loader'></div>
					<div className='infinite-loader'></div>
					<div className='infinite-loader'></div>
				</div>
			</div>
		);
	}

	return (
		<div
			className={props.className ? props.className : 'card-base'}
			data-theme={theme.getCurrent()}
			onClick={props.onClick}
		>
			{props.children}
		</div>
	);
}
