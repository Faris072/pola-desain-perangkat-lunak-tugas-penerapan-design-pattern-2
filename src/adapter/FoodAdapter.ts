import type IProduct from "@/product/IProduct";
import type ICategoryProduct from "./interfaces/ICategoryProduct";
import { categoryProductEnum } from "@/product/IProduct";
import type IMasterProductService from "@/services/interfaces/IProductService";

export default class FoodAdapter {
	private productService: IMasterProductService;

	constructor(productService: IMasterProductService) {
		this.productService = productService;

	}

	adapt(): ICategoryProduct[] {
		const products = this.productService.getProducts();

		return [
			{
				category: categoryProductEnum.makanan,
				products: products?.filter(product => product?.category === categoryProductEnum.makanan),
			},
			{
				category: categoryProductEnum.minuman,
				products: products?.filter(product => product?.category === categoryProductEnum.minuman),
			},
			{
				category: categoryProductEnum.snack,
				products: products?.filter(product => product?.category === categoryProductEnum.snack),
			},
		]
	}
}