type ProductModel = {
	id: string;
	title: string;
	price: number;
	description: string;
	thumbnail: string;
	sku?: string;
	createdAt?: Date;
	updatedAt?: Date;
};

export default ProductModel;
