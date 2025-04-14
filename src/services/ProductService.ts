import CurrencyAdapter from "@/adapter/CurrencyAdapter";
import type ICurrencyAdapter from "@/adapter/interfaces/ICurrencyAdapter";
import type Creator from "@/factory/Creator";
import MakananCreator from "@/factory/MakananCreateor";
import MinumanCreator from "@/factory/MinumanCreator";
import SnackCreator from "@/factory/SnackCreator";
import { categoryProductEnum } from "@/product/IProduct";
import type IProduct from "@/product/IProduct";
import type IProductRepository from "@/repositories/interface/IProductRepository";
import type IMasterProductService from "@/services/interfaces/IProductService";

export default class ProductService implements IMasterProductService {
	private productRepository: IProductRepository;
	private creators: { [key: string]: Creator };
	private currencyAdapter: ICurrencyAdapter;

	constructor(productRepository: IProductRepository) {
		this.productRepository = productRepository;
		this.currencyAdapter = new CurrencyAdapter();
		this.creators = {
			[categoryProductEnum.makanan]: new MakananCreator(),
			[categoryProductEnum.minuman]: new MinumanCreator(),
			[categoryProductEnum.snack]: new SnackCreator(),
		};
	}

	getProducts(currency: 'IDR' | 'USD' | 'YEN' = 'IDR'): IProduct[] {
		if(currency == 'USD'){
			return this.productRepository?.getProducts()?.map(product => {
				product.price = this.currencyAdapter?.rupiahToDollar(product?.price);
				return product;
			});
		}
		else if(currency == 'YEN'){
			return this.productRepository?.getProducts()?.map(product => {
				product.price = this.currencyAdapter?.rupiahToYen(product?.price);
				return product;
			});
		}
		else {
			return this.productRepository?.getProducts();
		}
	}

	addProduct(form: { name: string, category: categoryProductEnum, price: number, description?: string, imageUrl?: string }): void {
		let creator: Creator = this.creators[form.category];
		if(!creator || !form?.name || !form?.price) {
			alert('Data belum lengkap');
			return;
		};

		const product = creator.create(
			form?.name,
			form?.description,
			Number(form?.price || 0),
			form?.imageUrl,
		);

		this.productRepository?.addProduct(product);
	}

	deleteProduct(id: string){
		if(!id){
			alert('Id tidak boleh kosong');
			return;
		}
		this.productRepository?.deleteProduct(id);
	}
}