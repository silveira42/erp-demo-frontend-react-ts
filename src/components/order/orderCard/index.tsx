import CardBase from 'components/shared/cardBase';
import './styles.css';
import OrderModel from 'model/Order';

export type OrderCardProps = {
	order: OrderModel;
	isLoading?: boolean;
};

export default function OrderCard(props: OrderCardProps) {
	if (props.isLoading) {
		return <CardBase id={'0'} isLoading={true}></CardBase>;
	}

	return (
		<CardBase id={props.order.id} key={props.order.id} className='order-card'>
			<div className='order-card-row'>
				<div className='order-card-block order-card-id'>
					<h4>{`Pedido ${props.order.id}`}</h4>
				</div>
				<div className='order-card-block order-card-details'>
					<h5>{`Cliente: ${props.order.customer}`}</h5>
					<h5>{`CEP de entrega: ${props.order.deliveryCEP}`}</h5>
					<h5>{`ID do produto: ${props.order.productId}`}</h5>
					<h5>{`Quantidade: ${props.order.quantity}`}</h5>
				</div>
				<div className='order-card-block order-card-total'>
					<p>{`Preço total: R$${props.order.total}`}</p>
				</div>
			</div>
		</CardBase>
	);
}
