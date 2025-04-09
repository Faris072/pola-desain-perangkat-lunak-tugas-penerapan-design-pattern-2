import useProductStore from "@/stores/productStore";
import ServiceCreator from "./ServiceCreator";
import { ProductRepository } from "@/repositories/ProductRepository";
import ProductService from "@/services/ProductService";

export default class ProductServiceCreator extends ServiceCreator {
	create(){
		const productStore = useProductStore();
		const productRepository = new ProductRepository(productStore);
		return new ProductService(productRepository);
	}
}