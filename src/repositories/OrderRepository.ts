import type IProduct from "@/product/IProduct";
import type IOrderRepository from "./interface/IOrderRepository";
import useOrderStore from "@/stores/orderStore";
import { ref } from "vue";

export class OrderRepository implements IOrderRepository {
	private orderStore: any;

	constructor(orderStore: any){
		this.orderStore = orderStore;
	}

	getOrders(): IProduct[] {
		return this.orderStore?.getOrders();
	}

	addOrder(product: IProduct): void {
		this?.orderStore?.addOrder(product);
	}

	deleteOrder(id: string): void {
		this?.orderStore?.deleteOrder(id);
	}
}