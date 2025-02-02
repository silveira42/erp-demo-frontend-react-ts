import { useContext } from 'AppContext';
import './styles.css';
import React from 'react';

export type ModalProps = {
	close: () => void;
	children?: React.ReactNode;
	isLoading?: boolean;
};

export default function Modal(props: ModalProps) {
	const { theme } = useContext();

	return (
		<div className='modal-overlay'>
			<div className='modal-background' onClick={props.close} />
			<div className='modal-content' data-theme={theme.getCurrent()}>
				{props.children}
				{props.isLoading && (
					<div className='modal-loading'>
						<div className='modal-loading-spinner' />
					</div>
				)}
			</div>
		</div>
	);
}
