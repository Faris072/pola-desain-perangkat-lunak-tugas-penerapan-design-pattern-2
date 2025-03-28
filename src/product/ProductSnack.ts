import Product from "@/product/Product";
import type IProduct from "./IProduct";

export default class ProductSnack extends Product {
	constructor(id: IProduct['id'], name: IProduct['name'], description: IProduct['description'], price: IProduct['price'], category: IProduct['category'], imageUrl?: IProduct['imageUrl']){
		super(id, name, description, price, category, imageUrl);
	}

	show(){
		return {
			id: this.id,
			name: this.name,
			description: this.description,
			price: this.price,
			category: this.category,
			imageUrl: this?.imageUrl
		};
	}
}