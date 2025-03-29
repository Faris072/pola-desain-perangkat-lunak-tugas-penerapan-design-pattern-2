import type IProduct from "@/product/IProduct";
import { defineStore } from "pinia";
import { ref } from "vue";

const useProductStore = defineStore('product', () => {
	let products = ref<IProduct[]>([]);

	function getProducts(){
		return products.value;
	}

	function addProduct(product: IProduct){
		products?.value?.push(product);
	}

	function deleteProduct(id: string){	
		products.value = products?.value?.filter(product => product?.id !== id);
	}

	function saveProduct(product: IProduct[]){
		products.value = product;
	}

	return { products, addProduct, getProducts, deleteProduct, saveProduct };
});

export default useProductStore;