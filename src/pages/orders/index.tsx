import './styles.css';
import React from 'react';
import { useContext } from 'AppContext';
import { useOrder } from 'hooks/useOrder';
import OrderCardList from 'components/order/orderCardList';

export default function Orders() {
	const [isOrderListLoading, setIsOrderListLoading] = React.useState(false);
	const [error, setError] = React.useState('');

	const { orders, listOrders } = useOrder();

	const { theme } = useContext();

	React.useEffect(() => {
		setIsOrderListLoading(true);
		listOrders()
			.catch(() => setError('Error loading orders'))
			.finally(() => {
				setIsOrderListLoading(false);
			});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div className={'container orders'} data-theme={theme.getCurrent()}>
			<h1>Lista de pedidos</h1>
			<OrderCardList isLoading={isOrderListLoading} orders={orders} />
		</div>
	);
}
