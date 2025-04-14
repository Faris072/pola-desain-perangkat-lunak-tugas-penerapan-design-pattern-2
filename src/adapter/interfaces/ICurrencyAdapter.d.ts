export default interface ICurrencyAdapter {
	rupiahToDollar(rupiah: number): number;
	dollarToRupiah(dollar: number): number;
}