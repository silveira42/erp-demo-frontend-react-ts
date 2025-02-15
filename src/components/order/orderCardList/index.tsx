import CardList from 'components/shared/cardList';
import OrderModel from 'model/Order';
import OrderCard from '../orderCard';

type OrderCardListProps = {
	orders: OrderModel[];
	isLoading: boolean;
};

export default function OrderCardList(props: OrderCardListProps) {
	return (
		<CardList isLoading={props.isLoading}>
			{props.orders.map((order: OrderModel, index: number) => (
				<OrderCard key={index} order={order} />
			))}
		</CardList>
	);
}
