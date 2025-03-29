export default interface IOrderRepository {
	getOrders(): IProduct[];
	addOrder(product: IProduct): void;
	deleteOrder(id: string): void;
}