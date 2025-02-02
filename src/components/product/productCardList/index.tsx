import CardList from 'components/shared/cardList';
import ProductModel from 'model/Product';
import ProductCard from '../productCard';

type ProductCardListProps = {
	products: ProductModel[];
	onCreate: () => void;
	onUpdate: (product: ProductModel) => void;
	isLoading: boolean;
};

export default function ProductCardList(props: ProductCardListProps) {
	return (
		<CardList isLoading={props.isLoading} create={() => props.onCreate()}>
			{props.products.map((product: ProductModel, index: number) => (
				<ProductCard
					key={index}
					product={product}
					onClick={() => props.onUpdate(product)}
				/>
			))}
		</CardList>
	);
}
