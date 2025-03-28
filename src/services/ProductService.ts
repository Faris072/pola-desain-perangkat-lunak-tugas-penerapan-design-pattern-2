import type Creator from "@/factory/Creator";
import MakananCreator from "@/factory/MakananCreateor";
import MinumanCreator from "@/factory/MinumanCreator";
import SnackCreator from "@/factory/SnackCreator";
import { categoryProductEnum } from "@/product/IProduct";
import type IProduct from "@/product/IProduct";
import productRepository from "@/repositories/ProductRepository";
import type IMasterProductService from "@/services/interfaces/IProductService";

export default class ProductService implements IMasterProductService {
	private creators: { [key: string]: Creator };

	constructor() {
		this.creators = {
			[categoryProductEnum.makanan]: new MakananCreator(),
			[categoryProductEnum.minuman]: new MinumanCreator(),
			[categoryProductEnum.snack]: new SnackCreator(),
		};
	}

	getProducts(): IProduct[] {
		return productRepository?.getProducts();
	}

	addProduct(form: { name: string, category: categoryProductEnum, price: number, description?: string, imageUrl?: string }) {
		let creator: Creator = this.creators[form.category];
		if(!creator || !form?.name || !form?.price) {return;};

		const product = creator.create(
			form?.name,
			form?.description,
			form?.price,
			form?.imageUrl,
		);

		productRepository?.addProduct(product);
	}

	deleteProduct(id: string){
		productRepository?.deleteProduct(id);
	}
}