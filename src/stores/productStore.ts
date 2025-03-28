import type IProduct from "@/product/IProduct";
import { defineStore } from "pinia";
import { ref } from "vue";

const useProductStore = defineStore('product', () => {
	let products: IProduct[] = [];

	function getProducts(){
		return products;
	}

	function addProduct(product: IProduct){
		products?.push(product);
	}

	function deleteProduct(id: string){	
		products = products?.filter(product => product?.id !== id);
	}

	function saveProduct(product: IProduct[]){
		products = product;
	}

	return { products, addProduct, getProducts, deleteProduct, saveProduct };
});

export default useProductStore;