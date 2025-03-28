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
							<button class="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-lg">Tambah Keranjang</button>
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
				<h5>Pesanan: 2</h5>
				<h5 class="font-bold">Total: Rp100.000</h5>
			</div>
			<div class="kanan">
				<button class="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-3xl">Checkkout <i class="ml-2 pi pi-arrow-right"></i></button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import Navbar from './Navbar.vue';
import ProductGroupAdapter from '@/adapter/ProductGroupAdapter.ts';
import ProductService from '@/services/ProductService.ts';

const productGroupAdapter = new ProductGroupAdapter();
const productService = new ProductService();

const groupedProducts = computed(() => {
  return productGroupAdapter.adapt(productService?.getProducts());
});
</script>