type OrderModel = {
	id: string;
	customer: string;
	deliveryCEP: string;
	productId: string;
	quantity: number;
	total: number;
	createdAt: Date;
};

export default OrderModel;
