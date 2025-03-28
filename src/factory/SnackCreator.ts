import Creator from "./Creator";
import type IProduct from "../product/IProduct";
import { categoryProductEnum } from "../product/IProduct";
import ProductSnack from "../product/ProductSnack";

export default class SnackCreator extends Creator {
	create(name: IProduct['name'], description: IProduct['description'], price: IProduct['price'], imageUrl?: IProduct['imageUrl']) {
		return new ProductSnack(this?.generateId(), name, description, price, categoryProductEnum.snack, imageUrl);
	}
}