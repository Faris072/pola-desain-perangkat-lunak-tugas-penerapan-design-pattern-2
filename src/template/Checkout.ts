import type ICategoryProduct from "@/adapter/interfaces/ICategoryProduct";
import type IProductGroupAdapter from "@/adapter/interfaces/IProductGroupAdapter";
import type { IOrderService } from "@/services/interfaces/IOrderService";

export default abstract class Checkout {
	protected readonly productGroupAdapter: IProductGroupAdapter;
	protected readonly orderService: IOrderService;
	private orders: ICategoryProduct[] = [];
	private totalPrice: number = 0;
	private discount: number = 0;
	private tax: number = 0;
	private grandTotal: number = 0;

	constructor(
		productGroupAdapter: IProductGroupAdapter,
		orderService: IOrderService
	) {
		this.productGroupAdapter = productGroupAdapter;
		this.orderService = orderService;
	}

	// pengganti final method di java supaya tidak di override sub class
	private execCheckout(){
		this.orders = this.groupingOrdersByCategory();
		this.totalPrice = this.countTotalPrice();
		this.discount = this.countTotalDiscount();
		this.tax = this.countTax();
		this.grandTotal = this.countGrandTotal();
	}
	public checkout(){
		this.execCheckout();
	}

	get getOrders(): ICategoryProduct[] {
		return this.orders;
	}

	get getTotalPrice(): number {
		return this.totalPrice;
	}

	get getDiscount(): number {
		return this.discount;
	}

	get getTax(): number {
		return this.tax;
	}

	get getGrandTotal(): number {
		return this.grandTotal;
	}

	protected groupingOrdersByCategory(): ICategoryProduct[] {
		return this.productGroupAdapter?.adapt(this.orderService?.getOrders());
	}

	protected countTotalPrice(): number{
		return this.orderService?.getTotalPrice();
	}

	protected abstract countTotalDiscount(): number;

	protected abstract countTax(): number;

	protected abstract countGrandTotal(): number;
}