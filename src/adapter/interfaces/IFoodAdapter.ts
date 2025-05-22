import type IProduct from "@/product/IProduct";
import type ICategoryProduct from "./ICategoryProduct";
import type IMasterProductService from "@/services/interfaces/IProductService";

export default interface IFoodAdapter {
	makanan: IProduct[];
	minuman: IProduct[];
	snack: IProduct[];

	adapt(productService: IMasterProductService): ICategoryProduct[];
}