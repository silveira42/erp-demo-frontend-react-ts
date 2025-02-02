import './styles.css';
import React from 'react';
import { useKeyPressEvent } from 'react-use';
import { useContext } from 'AppContext';
import ProductModel from 'model/Product';
import { useProduct } from 'hooks/useProduct';
import ProductCardList from 'components/product/productCardList';
import ProductCreateModal from 'components/product/productCreateModal';
import ProductUpdateModal from 'components/product/productUpdateModal';

export default function Products() {
	const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
	const [isUpdateModalOpen, setIsUpdateModalOpen] = React.useState(false);
	const [productToUpdate, setProductToUpdate] =
		React.useState<ProductModel | null>(null);
	const [isProductListLoading, setIsProductListLoading] = React.useState(false);
	const [error, setError] = React.useState('');

	const { products, listProducts } = useProduct();

	const { theme } = useContext();

	const closeUpdateModal = () => {
		setIsUpdateModalOpen(false);
		setProductToUpdate(null);
		setIsProductListLoading(true);
		listProducts()
			.catch(() => setError('Error loading products'))
			.finally(() => {
				setIsProductListLoading(false);
			});
	};

	const closeCreateModal = () => {
		setIsCreateModalOpen(false);
		setIsProductListLoading(true);
		listProducts()
			.catch(() => setError('Error loading products'))
			.finally(() => {
				setIsProductListLoading(false);
			});
	};

	const openCreateModal = () => {
		setIsCreateModalOpen(true);
	};

	const openUpdateModal = (product: ProductModel) => {
		setIsUpdateModalOpen(true);
		setProductToUpdate(product);
	};

	React.useEffect(() => {
		setIsProductListLoading(true);
		listProducts()
			.catch(() => setError('Error loading products'))
			.finally(() => {
				setIsProductListLoading(false);
			});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useKeyPressEvent('Escape', () => {
		if (isCreateModalOpen) {
			setIsCreateModalOpen(false);
		}
		if (isUpdateModalOpen) {
			closeUpdateModal();
			setProductToUpdate(null);
		}
	});

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div className={'container products'} data-theme={theme.getCurrent()}>
			<h1>Welcome products!!</h1>
			<ProductCardList
				isLoading={isProductListLoading}
				onCreate={openCreateModal}
				onUpdate={openUpdateModal}
				products={products}
			/>
			{isCreateModalOpen && <ProductCreateModal onClose={closeCreateModal} />}
			{isUpdateModalOpen && productToUpdate && (
				<ProductUpdateModal
					product={productToUpdate}
					onClose={closeUpdateModal}
				/>
			)}
		</div>
	);
}
