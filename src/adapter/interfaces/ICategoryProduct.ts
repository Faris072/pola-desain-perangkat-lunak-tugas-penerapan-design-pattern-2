import type IProduct from "@/product/IProduct";

export default interface ICategoryProduct {
	category: string;
	products: IProduct[];
}