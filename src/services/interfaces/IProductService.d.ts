import type IProduct from "@/product/IProduct";

export default interface IMasterProductService {
	getProducts(): IProduct[];
	addProduct(form: IProduct): void;
	deleteProduct(id: string): void;
}