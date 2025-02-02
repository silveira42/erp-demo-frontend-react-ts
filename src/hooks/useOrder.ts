import OrderModel from 'model/Order';
import React from 'react';
import OrderApi from 'api/OrderApi';

export const useOrder = () => {
	const [orders, setOrders] = React.useState<OrderModel[]>([]);
	const [selectedOrder, setSelectedOrder] = React.useState<OrderModel | null>(
		null
	);

	const changeSelectedOrder = (selectedOrderId: string) => {
		OrderApi.get(selectedOrderId).then(order => {
			setSelectedOrder(order);
		});
	};

	const listOrders = (): Promise<void> => {
		return OrderApi.list()
			.then(orders => {
				setOrders(orders);
			})
			.catch(() => {
				setOrders([]);
			});
	};

	const createOrder = (order: Partial<OrderModel>) => {
		return OrderApi.create(order);
	};

	return {
		changeSelectedOrder,
		selectedOrder,
		createOrder,
		orders,
		listOrders,
	};
};
