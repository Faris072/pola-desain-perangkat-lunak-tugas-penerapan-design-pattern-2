export default interface ICurrencyAdapter {
	rupiahToDollar(rupiah: number): number;
	dollarToRupiah(dollar: number): number;
	rupiahToYen(rupiah: number): number;
	yenToRupiah(yen: number): number;
}