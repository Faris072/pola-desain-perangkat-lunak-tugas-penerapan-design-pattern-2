import type IRupiahFormatAdapter from "./interfaces/IRupiahFormatAdapter";

export default class RupiahFormatAdapter implements IRupiahFormatAdapter {
	service:Intl.NumberFormat;

	constructor(){
		this.service = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' });
	}

	build(data: number): string {
		return this.service.format(data);
	}
}