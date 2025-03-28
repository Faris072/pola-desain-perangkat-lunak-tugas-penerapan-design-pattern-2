import Creator from "./Creator";
import type IProduct from "../product/IProduct";
import { categoryProductEnum } from "../product/IProduct";
import ProductMinuman from "../product/ProductMinuman";

export default class MinumanCreator extends Creator {
	create(name: IProduct['name'], description: IProduct['description'], price: IProduct['price'], imageUrl?: IProduct['imageUrl']) {
		return new ProductMinuman(this?.generateId(), name, description, price, categoryProductEnum.minuman, imageUrl);
	}
}