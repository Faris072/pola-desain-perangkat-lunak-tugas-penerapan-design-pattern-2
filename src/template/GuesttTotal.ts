import type IProductGroupAdapter from "@/adapter/interfaces/IProductGroupAdapter";
import Checkout from "./Checkout";
import type { IOrderService } from "@/services/interfaces/IOrderService";

export default class GuestTotal extends Checkout {
	constructor(productGroupAdapter: IProductGroupAdapter, orderService: IOrderService){
		super(productGroupAdapter, orderService);
	}

	protected countTotalDiscount(): number {
		if(this.getTotalPrice > 0 && this.getTotalPrice <= 50_000){
			return this.getTotalPrice * 0.02;
		}
		else if(this.getTotalPrice > 50_000 && this.getTotalPrice <= 100_000){
			return this.getTotalPrice * 0.05;
		}
		else if(this.getTotalPrice > 100_000){
			return this.getTotalPrice * 0.1;
		}
		else {
			return 0;
		}
	}

	protected countTax(): number {
		if(this.getTotalPrice <= 10_000_000){
			return this.getTotalPrice * 0.11;
		}
		else {
			return this.getTotalPrice * 0.12;
		}
	}

	protected countGrandTotal(): number {
		return this.getTotalPrice - this.getDiscount + this.getTax;
	}
}