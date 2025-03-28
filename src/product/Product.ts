import type IProduct from "@/product/IProduct";

export default abstract class Product implements IProduct {
	id: IProduct['id'];
	name: IProduct['name'];
	description?: IProduct['description'];
	price: IProduct['price'];
	category: IProduct['category'];
	imageUrl?: IProduct['imageUrl']

	constructor(id: IProduct['id'], name: IProduct['name'], description: IProduct['description'], price: IProduct['price'], category: IProduct['category'], imageUrl?: IProduct['imageUrl']) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.category = category;
		this.imageUrl = imageUrl;
	}
}