import type IProduct from "@/product/IProduct";
import type { IOrderService } from "./interfaces/IOrderService";
import type IOrderRepository from "@/repositories/interface/IOrderRepository";
import type ICurrencyAdapter from "@/adapter/interfaces/ICurrencyAdapter";
import CurrencyAdapter from "@/adapter/CurrencyAdapter";

export default class OrderService implements IOrderService {
	private orderRepository: IOrderRepository;
	private currencyAdapter: ICurrencyAdapter;

	constructor(orderRepository: IOrderRepository) {
		this.orderRepository = orderRepository;
		this.currencyAdapter = new CurrencyAdapter();
	}

	addOrder(product: IProduct): void {
		if(!product) {
			alert('Produk tidak ada');
			return;
		};
		this?.orderRepository?.addOrder(product);
	}

	getOrders(): IProduct[] {
		return this.orderRepository?.getOrders();
	}

	getCountOrders(): number {
		return this?.orderRepository?.getOrders().length;
	}

	getTotalPrice(): number {
		return this?.orderRepository?.getOrders()?.reduce((acc, product) => acc + Number(product?.price || 0), 0);
	}

	deleteOrder(id: string): void {
		if(!id){
			alert('Id tidak boleh kosong');
			return;
		}
		this?.orderRepository?.deleteOrder(id);
	}
}