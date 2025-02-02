import './styles.css';
import React from 'react';
import { useKeyPressEvent } from 'react-use';
import { useContext } from 'AppContext';
import { useOrder } from 'hooks/useOrder';
import OrderModel from 'model/Order';

export default function Orders() {
	const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
	const [isUpdateModalOpen, setIsUpdateModalOpen] = React.useState(false);
	const [orderToUpdate, setOrderToUpdate] = React.useState<OrderModel | null>(
		null
	);
	const [isOrderListLoading, setIsOrderListLoading] = React.useState(false);
	const [error, setError] = React.useState('');

	const { orders, listOrders } = useOrder();

	const { theme } = useContext();

	const closeUpdateModal = () => {
		setIsUpdateModalOpen(false);
		setOrderToUpdate(null);
		setIsOrderListLoading(true);
		listOrders()
			.catch(() => setError('Error loading orders'))
			.finally(() => {
				setIsOrderListLoading(false);
			});
	};

	const closeCreateModal = () => {
		setIsCreateModalOpen(false);
		setIsOrderListLoading(true);
		listOrders()
			.catch(() => setError('Error loading orders'))
			.finally(() => {
				setIsOrderListLoading(false);
			});
	};

	const openCreateModal = () => {
		setIsCreateModalOpen(true);
	};

	const openUpdateModal = (order: OrderModel) => {
		setIsUpdateModalOpen(true);
		setOrderToUpdate(order);
	};

	React.useEffect(() => {
		setIsOrderListLoading(true);
		listOrders()
			.catch(() => setError('Error loading orders'))
			.finally(() => {
				setIsOrderListLoading(false);
			});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useKeyPressEvent('Escape', () => {
		if (isCreateModalOpen) {
			setIsCreateModalOpen(false);
		}
		if (isUpdateModalOpen) {
			closeUpdateModal();
			setOrderToUpdate(null);
		}
	});

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div className={'container orders'} data-theme={theme.getCurrent()}>
			<h1>Welcome orders!!</h1>
		</div>
	);
}
