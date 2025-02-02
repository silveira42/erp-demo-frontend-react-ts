import Modal from 'components/shared/modal';
import ProductModel from 'model/Product';
import React from 'react';
import ProductApi from 'api/ProductApi';

type ProductUpdateModalProps = {
	product: ProductModel;
	onClose: () => void;
};

export default function ProductUpdateModal(props: ProductUpdateModalProps) {
	const [productName, setProductName] = React.useState(props.product.title);
	const [productDescription, setProductDescription] = React.useState(
		props.product.description
	);
	const [productThumbnail, setProductThumbnail] = React.useState(
		props.product.thumbnail
	);
	const [productPrice, setProductPrice] = React.useState(props.product.price);
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState('');

	const updateProduct = (product: Partial<ProductModel>): void => {
		setIsLoading(true);

		ProductApi.update(props.product.id, product)
			.then(() => props.onClose())
			.catch(error => {
				setError(error.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const deleteProduct = (): void => {
		setIsLoading(true);

		ProductApi.delete(props.product.id)
			.then(() => props.onClose())
			.catch(error => {
				setError(error.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<Modal close={() => props.onClose()} isLoading={isLoading}>
			{error && <div>{error}</div>}
			<h1>Update Product</h1>
			<input
				type='text'
				value={productName}
				onChange={e => setProductName(e.target.value)}
			></input>
			<input
				type='text'
				value={productDescription}
				onChange={e => setProductDescription(e.target.value)}
			></input>
			<input
				type='text'
				value={productThumbnail}
				onChange={e => setProductThumbnail(e.target.value)}
			></input>
			<input
				type='number'
				value={productPrice}
				onChange={e => setProductPrice(parseFloat(e.target.value))}
			></input>
			<button
				onClick={() =>
					updateProduct({
						title: productName,
						description: productDescription,
						thumbnail: productThumbnail,
						price: productPrice,
					})
				}
			>
				Update
			</button>
			<button onClick={() => deleteProduct()}>Delete</button>
		</Modal>
	);
}
