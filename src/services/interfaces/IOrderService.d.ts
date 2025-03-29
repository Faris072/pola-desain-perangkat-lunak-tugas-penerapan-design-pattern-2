export interface IOrderService {
	getOrders(): IProduct[];
	getCountOrders(): number;
	getTotalPrice(): number;
	addOrder(product: IProduct): void;
	deleteOrder(id: string): void;
}