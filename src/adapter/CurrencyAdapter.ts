import type ICurrencyAdapter from "./interfaces/ICurrencyAdapter";

export default class CurrencyAdapter implements ICurrencyAdapter {
	public rupiahToDollar(rupiah: number): number {
		return rupiah / 16500;
	}

	public dollarToRupiah(dollar: number): number {
		return dollar * 16500;
	}

	public rupiahToYen(rupiah: number): number {
		return rupiah / 110;
	}

	public yenToRupiah(yen: number): number {
		return yen * 110;
	}
}