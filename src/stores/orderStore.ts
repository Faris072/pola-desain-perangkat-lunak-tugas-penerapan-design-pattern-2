import type IProduct from "@/product/IProduct";
import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useOrderStore = defineStore('order', () => {
	let orders = ref<IProduct[]>([]);

	watch(orders, (newValue, oldValue) => {
		localStorage.setItem('orders', JSON.stringify(orders.value))
	}, { deep: true });
	
	function init(){
		orders.value = JSON.parse(localStorage.getItem('orders') || '[]');
	}

	function addOrder(product: IProduct){
		orders?.value?.push(product);
	}

	function getOrders(){
		return orders?.value;
	}

	function deleteOrder(id: string){
		orders.value = orders?.value?.filter(order => order?.id !== id);
	}

	return { orders, addOrder, getOrders, deleteOrder, init };
});

export default useOrderStore;