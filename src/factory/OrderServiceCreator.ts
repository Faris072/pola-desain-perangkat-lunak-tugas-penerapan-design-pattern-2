import useOrderStore from "@/stores/orderStore";
import ServiceCreator from "./ServiceCreator";
import OrderService from "@/services/OrderService";
import { OrderRepository } from "@/repositories/OrderRepository";

export default class OrderServiceCreator extends ServiceCreator {
	create() {
		const orderStore = useOrderStore();
		const orderRepository = new OrderRepository(orderStore);
		return new OrderService(orderRepository);
	}
}