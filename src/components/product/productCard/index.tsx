import CardBase from 'components/shared/cardBase';
import './styles.css';
import ProductModel from 'model/Product';

export type ProductCardProps = {
	product: ProductModel;
	onClick: () => void;
	isLoading?: boolean;
};

export default function ProductCard(props: ProductCardProps) {
	if (props.isLoading) {
		return <CardBase id={'0'} isLoading={true}></CardBase>;
	}

	return (
		<CardBase
			id={props.product.id}
			onClick={() => props.onClick()}
			key={props.product.id}
			className='product-card'
		>
			<div className='card-row'>
				<div className='card-block product-card-image'>
					<img src={props.product.thumbnail} alt={props.product.description} />
				</div>
				<div className='card-block'>
					<div className='card-row'>
						<div className='card-block'>
							<h3>{`${props.product.title}`}</h3>
							<h5>{`${props.product.description}`}</h5>
							<h4>{`R$${props.product.price}`}</h4>
						</div>
					</div>
				</div>
			</div>
		</CardBase>
	);
}
