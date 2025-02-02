import React from 'react';
import './styles.css';
import CardBase from 'components/shared/cardBase';
import { useContext } from 'AppContext';

export type CardListProps = {
	isLoading: boolean;
	children: React.ReactNode[];
	create?: () => void;
};

export default function CardList(props: CardListProps) {
	const { theme } = useContext();

	if (props.isLoading) {
		return (
			<div className='card-list' data-theme={theme.getCurrent()}>
				<CardBase onClick={() => {}} id={'0'} isLoading={true}></CardBase>
				<CardBase onClick={() => {}} id={'0'} isLoading={true}></CardBase>
			</div>
		);
	}

	return (
		<div className='card-list' data-theme={theme.getCurrent()}>
			{props.children.map((child, index) => (
				<div key={index}>{child}</div>
			))}
			{props.create && (
				<CardBase
					className='card-base card-create-base'
					onClick={props.create}
					id={'0'}
				>
					<h3>+</h3>
				</CardBase>
			)}
		</div>
	);
}
