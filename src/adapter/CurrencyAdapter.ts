import type ICurrencyAdapter from "./interfaces/ICurrencyAdapter";

export default class CurrencyAdapter implements ICurrencyAdapter {
	public rupiahToDollar(rupiah: number): number {
		return Number(rupiah / 16500) || 0;
	}

	public dollarToRupiah(dollar: number): number {
		return Number(dollar * 16500) || 0;
	}
}