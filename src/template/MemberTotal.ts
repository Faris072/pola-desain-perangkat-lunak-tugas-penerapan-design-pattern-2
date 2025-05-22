import type IProductGroupAdapter from "@/adapter/interfaces/IProductGroupAdapter";
import Checkout from "./Checkout";
import type { IOrderService } from "@/services/interfaces/IOrderService";

export default class MemberTotal extends Checkout {
	constructor(productGroupAdapter: IProductGroupAdapter, orderService: IOrderService){
		super(productGroupAdapter, orderService);
	}

	protected countTotalDiscount(): number {
			return this.getTotalPrice * 0.4;
	}

	protected countTax(): number {
			return this.getTotalPrice * 0.11;
	}

	protected countGrandTotal(): number {
		return this.getTotalPrice - this.getDiscount + this.getTax;
	}
}