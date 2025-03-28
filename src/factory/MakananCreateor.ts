import Creator from "./Creator";
import type IProduct from "../product/IProduct";
import { categoryProductEnum } from "../product/IProduct";
import ProductMakanan from "../product/ProductMakanan";

export default class MakananCreator extends Creator {
	create(name: IProduct['name'], description: IProduct['description'], price: IProduct['price'], imageUrl?: IProduct['imageUrl']) {
		return new ProductMakanan(this?.generateId(), name, description, price, categoryProductEnum.makanan, imageUrl);
	}
}