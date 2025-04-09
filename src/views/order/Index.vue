<template>
	<div>
		<Navbar></Navbar>
		<br>
		<div class="p-10">
			<div v-for="(category, index) in groupedProducts" class="card bg-white p-10 mb-10">
				<h2>{{ category?.category }}</h2>
				<br>
				<div class="wrap-product grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7">
					<div v-for="(item, idx) in category?.products" class="card">
						<div class="head h-55 overflow-hidden">
							<img :src="item?.imageUrl" class="w-full object-cover object-center hover:scale-120 duration-400" alt="">
						</div>
						<div class="body p-5">
							<h5 class="font-bold">{{ item?.name }}</h5>
							<h6 class="text-red-700">Rp{{ item.price }}</h6>
							<br>
							<p>{{ item?.description }}</p>
							<br>
							<button @click="orderService?.addOrder(item)" class="cursor-pointer w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-lg">Tambah Keranjang</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="transaction fixed bottom-5 w-full m-auto">
		<div class="card flex items-center justify-between m-auto w-3/4 sm:max-w-1/2 p-5 px-10 rounded-full">
			<div class="kiri flex gap-7">
				<i class="pi pi-shopping-cart text-black text-2xl"></i>
				<h5>Pesanan: {{ orderService?.getCountOrders() }}</h5>
				<h5 class="font-bold">Total: {{ orderService?.getTotalPrice() }}</h5>
			</div>
			<div class="kanan">
				<router-link to="/checkout" class="cursor-pointer w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-3xl">Checkkout <i class="ml-2 pi pi-arrow-right"></i></router-link>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import Navbar from './Navbar.vue';
import ProductGroupAdapter from '@/adapter/ProductGroupAdapter.ts';
import OrderServiceCreator from '@/factory/OrderServiceCreator';
import ProductServiceCreator from '@/factory/ProductServiceCreator';

const productGroupAdapter = new ProductGroupAdapter();
const groupedProducts = computed(() => {
  return productGroupAdapter.adapt(productService?.getProducts());
});

const productService = new ProductServiceCreator()?.create();
const orderService = new OrderServiceCreator()?.create();
</script>