import type IProduct from "../product/IProduct";

export default abstract class Creator {
	generateId(): string {
		return (Math.random()*10_000)?.toFixed(0);
	}

	abstract create(name: IProduct['name'], description: IProduct['description'], price: IProduct['price'], imageUrl?: IProduct['imageUrl']): IProduct;
}