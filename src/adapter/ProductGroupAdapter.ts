import type IProduct from "@/product/IProduct";
import type ICategoryProduct from "./interfaces/ICategoryProduct";
import type IProductGroupAdapter from "./interfaces/IProductGroupAdapter";

export default class ProductGroupAdapter implements IProductGroupAdapter {
	adapt(products: IProduct[]): ICategoryProduct[] {
	  return products?.reduce((acc, product) => {
			const category = product?.category;
			if (!category) return acc;

			const exsistingCategory = acc?.find(item => item?.category === category);
			if(exsistingCategory) {
				exsistingCategory?.products?.push(product);
			}
			else {
				acc?.push({ category, products: [product] });
			}
			
			return acc;
		}, [] as ICategoryProduct[]);
	}
}