import type IProduct from "@/product/IProduct";
import type { IOrderService } from "./interfaces/IOrderService";
import orderRepository from "@/repositories/OrderRepository";

export class OrderService implements IOrderService {
	addOrder(product: IProduct): void {
		if(!product) {
			alert('Produk tidak ada');
			return;
		};
		orderRepository?.addOrder(product);
	}

	getOrders(): IProduct[] {
		return orderRepository?.getOrders();
	}

	getCountOrders(): number {
		return orderRepository?.getOrders().length;
	}

	getTotalPrice(): number {
		return orderRepository?.getOrders()?.reduce((acc, product) => acc + Number(product?.price || 0), 0);
	}

	deleteOrder(id: string): void {
		if(!id){
			alert('Id tidak boleh kosong');
			return;
		}
		orderRepository?.deleteOrder(id);
	}
}

export default new OrderService();