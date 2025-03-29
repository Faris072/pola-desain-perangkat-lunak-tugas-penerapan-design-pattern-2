import type IProduct from "@/product/IProduct";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useOrderStore = defineStore('order', () => {
	let orders = ref<IProduct[]>([]);
	
	function addOrder(product: IProduct){
		orders?.value?.push(product);
	}

	function getOrders(){
		return orders?.value;
	}

	function deleteOrder(id: string){
		orders.value = orders?.value?.filter(order => order?.id !== id);
	}

	return { orders, addOrder, getOrders, deleteOrder };
});

export default useOrderStore;