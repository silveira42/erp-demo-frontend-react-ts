import Modal from 'components/shared/modal';
import ProductModel from 'model/Product';
import React from 'react';
import { useProduct } from 'hooks/useProduct';

type ProductCreateModalProps = {
	onClose: () => void;
};

export default function ProductCreateModal(props: ProductCreateModalProps) {
	const [productName, setProductName] = React.useState('');
	const [productDescription, setProductDescription] = React.useState('');
	const [productThumbnail, setProductThumbnail] = React.useState('');
	const [productPrice, setProductPrice] = React.useState('');
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState('');

	const { createProduct } = useProduct();

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const product: Partial<ProductModel> = {
			title: productName,
			description: productDescription,
			thumbnail: productThumbnail,
			price: parseFloat(productPrice),
		};

		setIsLoading(true);

		createProduct(product)
			.then(() => props.onClose())
			.catch((error: Error) => {
				setError(error.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<Modal close={() => props.onClose()} isLoading={isLoading}>
			{error && <div>{error}</div>}
			<form onSubmit={e => onSubmit(e)}>
				<input
					type='text'
					value={productName}
					onChange={e => setProductName(e.target.value)}
					placeholder='Product Name'
				/>
				<input
					type='text'
					value={productDescription}
					onChange={e => setProductDescription(e.target.value)}
					placeholder='Product Description'
				/>
				<input
					type='text'
					value={productThumbnail}
					onChange={e => setProductThumbnail(e.target.value)}
					placeholder='Product Thumbnail'
				/>
				<input
					type='text'
					value={productPrice}
					onChange={e => setProductPrice(e.target.value)}
					placeholder='Product Price'
				/>
				<button type='submit'>Create</button>
			</form>
		</Modal>
	);
}
