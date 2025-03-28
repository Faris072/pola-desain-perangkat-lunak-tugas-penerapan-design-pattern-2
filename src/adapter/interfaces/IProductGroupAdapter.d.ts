import type ICategoryProduct from "./ICategoryProduct";

export default interface IProductGroupAdapter {
	adapt(products: IProduct[]): ICategoryProduct[];
}