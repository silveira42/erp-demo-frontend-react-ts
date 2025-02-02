import ProductModel from 'model/Product';
import React from 'react';
import ProductApi from 'api/ProductApi';

export const useProduct = () => {
	const [products, setProducts] = React.useState<ProductModel[]>([]);
	const [selectedProduct, setSelectedProduct] =
		React.useState<ProductModel | null>(null);

	const changeSelectedProduct = (selectedProductId: string) => {
		ProductApi.get(selectedProductId).then(product => {
			setSelectedProduct(product);
		});
	};

	const listProducts = (): Promise<void> => {
		return ProductApi.list()
			.then(products => {
				setProducts(products);
			})
			.catch(() => {
				setProducts([]);
			});
	};

	const createProduct = (product: Partial<ProductModel>) => {
		return ProductApi.create(product);
	};

	return {
		changeSelectedProduct,
		selectedProduct,
		createProduct,
		products,
		listProducts,
	};
};
