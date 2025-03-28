export enum categoryProductEnum {
	makanan = 'Makanan',
	minuman = 'Minuman',
	snack = 'Snack'
}

export default interface IProduct {
	id: string,
	name: string,
	description?: string,
	price: number,
	category: categoryProductEnum,
	imageUrl?: string,
}