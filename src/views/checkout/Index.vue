<template>
	<div class="p-25">
		<router-link to="/" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded-3xl"><i class="pi pi-arrow-left mr-2"></i> Kembali</router-link>
		<br><br><br>
		<div class="flex items-center justify-between">
			<div class="content card p-10 w-full">
				<div class="head border-b-2 border-dashed border-gray-400 pb-3">
					<h1>Checkout</h1>
					<span class="text-gray-700">Check your order before payment</span>
					<br><br>
				</div>
				<br>
				<div class="body border-b-2 border-dashed border-gray-400 pb-3">
					<div v-for="(category, index) in checkoutTotal?.getOrders" class="list-order">
						<h3>List Order {{ category?.category }}</h3>
						<br>
						<div v-for="(product, idx) in category?.products" class="item flex items-center justify-between border-b-1 border-gray-300 mb-2 p-2">
							<div class="kiri flex items-center gap-3">
								<img :src="product?.imageUrl" class="w-15 h-15 rounded-lg" alt="">
								<div class="info">
									<h5 class="font-semibold mb-0 text-gray-800">{{ product?.name }}</h5>
									<small class="text-gray-500">{{ product?.description }}</small>
								</div>
							</div>
							<div class="kanan flex items-center justify-end gap-5">
								<h5 class="font-bold text-green-500">+ {{ currencyStore.currency == 'USD' ? '$' : 'Rp' }} {{ currencyStore.currency == 'USD' ? currencyAdapter?.rupiahToDollar(product?.price)?.toFixed(3) : product?.price }}</h5>
							</div>
						</div>
					</div>
					<br>
				</div>
				<br>
				<div class="total pb-3">
					<div class="head">
						<h3>Total</h3>
						<span class="text-gray-700">Check your bill</span>
					</div>
					<br>
					<div class="list-total">
						<div class="item flex items-center justify-between border-b-1 border-gray-300 mb-2 p-2 py-3">
							<div class="kiri flex items-center gap-3">
								<div class="info">
									<h5 class="font-semibold mb-0 text-gray-800">Total Price</h5>
								</div>
							</div>
							<div class="kanan flex items-center justify-end gap-5">
								<h5 class="font-bold text-blue-500">{{ currencyStore.currency == 'USD' ? '$' : 'Rp' }} {{ currencyStore.currency == 'USD' ? currencyAdapter?.rupiahToDollar(checkoutTotal?.getTotalPrice)?.toFixed(3) : checkoutTotal?.getTotalPrice }}</h5>
							</div>
						</div>
						<div class="item flex items-center justify-between border-b-1 border-gray-300 mb-2 p-2 py-3">
							<div class="kiri flex items-center gap-3">
								<div class="info">
									<h5 class="font-semibold mb-0 text-gray-800">Discount</h5>
								</div>
							</div>
							<div class="kanan flex items-center justify-end gap-5">
								<h5 class="font-bold text-yellow-500">{{ currencyStore.currency == 'USD' ? '$' : 'Rp' }} {{ checkoutTotal?.getDiscount }}</h5>
							</div>
						</div>
						<div class="item flex items-center justify-between border-b-2 border-dashed border-gray-400 mb-2 p-2 py-3">
							<div class="kiri flex items-center gap-3">
								<div class="info">
									<h5 class="font-semibold mb-0 text-gray-800">Tax</h5>
								</div>
							</div>
							<div class="kanan flex items-center justify-end gap-5">
								<h5 class="font-bold text-red-500">{{ currencyStore.currency == 'USD' ? '$' : 'Rp' }} {{ currencyStore.currency == 'USD' ? currencyAdapter?.rupiahToDollar(checkoutTotal?.getTax)?.toFixed(3) : checkoutTotal?.getTax }}</h5>
							</div>
						</div>
						<div class="item flex items-center justify-between mb-2 p-2 py-3">
							<div class="kiri flex items-center gap-3">
								<div class="info">
									<h3 class="font-semibold mb-0 text-gray-800">Grand Total</h3>
								</div>
							</div>
							<div class="kanan flex items-center justify-end gap-5">
								<h3 class="font-bold text-blue-500">{{ currencyStore.currency == 'USD' ? '$' : 'Rp' }} {{ currencyStore.currency == 'USD' ? currencyAdapter?.rupiahToDollar(checkoutTotal?.getGrandTotal)?.toFixed(3) : checkoutTotal?.getGrandTotal }}</h3>
							</div>
						</div>
					</div>
				</div>
				<br>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import CurrencyAdapter from '@/adapter/CurrencyAdapter';
import ProductGroupAdapter from '@/adapter/ProductGroupAdapter';
import OrderServiceCreator from '@/factory/OrderServiceCreator';
import useCurrencyStore from '@/stores/currencyStore';
import type Checkout from '@/template/Checkout';
import GuestTotal from '@/template/GuesttTotal';
import MemberTotal from '@/template/MemberTotal';
import { ref } from 'vue';

const isPremium = ref(true);
const orderServiceCreator = new OrderServiceCreator();
const orderService = orderServiceCreator?.create();
const currencyAdapter = new CurrencyAdapter();
const currencyStore = useCurrencyStore();

let checkoutTotal: Checkout | undefined;
if(isPremium.value){
	checkoutTotal = new MemberTotal(new ProductGroupAdapter(), orderService);
}
else {
	checkoutTotal = new GuestTotal(new ProductGroupAdapter(), orderService);
}
checkoutTotal.checkout();

</script>