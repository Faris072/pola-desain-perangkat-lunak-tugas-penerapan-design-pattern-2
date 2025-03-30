import useProductStore from "@/stores/productStore";
import type IProductRepository from "./interface/IProductRepository";
import type IProduct from "@/product/IProduct";

export class ProductRepository implements IProductRepository {
	private productStore: any;

	constructor(productStore: any){
		this.productStore = productStore;
	}

	getProducts(){
		return this.productStore.getProducts();
	}

	addProduct(product: IProduct): void {
		this.productStore.addProduct(product);
	}

	deleteProduct(id: string): void {
		this.productStore.deleteProduct(id);
	}
}