<template>
	<div class="py-15 container m-auto">
		<router-link to="/" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded-3xl"><i class="pi pi-arrow-left mr-2"></i> Kembali</router-link>
		<div class="head flex items-center justify-end">
			<button @click="showModal = true" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-3xl">Tambah Produk</button>
		</div>
		<br>
		<table cellpadding="0" cellspacing="0" class="table">
			<thead>
				<tr>
					<th class="w-5">No</th>
					<th colspan="2" class="text-left">Produk</th>
					<th class="text-left">Deskripsi</th>
					<th class="text-left w-50">Harga</th>
					<th class="text-center w-10">Kategori</th>
					<th class="text-left w-5">Aksi</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(context, index) in productService?.getProducts()">
					<td class="text-center">{{ index+1 }}</td>
					<td class="w-20">
						<div class="w-full flex justify-center">
							<img :src="context?.imageUrl" class="w-10 h-10 rounded-full object-cover">
						</div>
					</td>
					<td>{{ context?.name }}</td>
					<td>{{ context?.description }}</td>
					<td>{{ rupiahFormatAdapter?.build(context?.price) }}</td>
					<td>
						<span v-if="context?.category == categoryProductEnum?.makanan" class="p-1 px-2 rounded-lg text-white bg-green-500">{{ context?.category }}</span>
						<span v-if="context?.category == categoryProductEnum?.minuman" class="p-1 px-2 rounded-lg text-white bg-blue-500">{{ context?.category }}</span>
						<span v-if="context?.category == categoryProductEnum?.snack" class="p-1 px-2 rounded-lg text-white bg-yellow-500">{{ context?.category }}</span>
					</td>
					<td><button @click="productService?.deleteProduct(context?.id)" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-lg"><i class="pi pi-trash text-white"></i></button></td>
				</tr>
			</tbody>
		</table>
	</div>
	<Modal v-if="showModal" @hide="showModal = false">
		<div class="head flex items-center justify-between border-b-1 border-gray-200 pb-3">
			<h5 class="font-bold">Tambah Produk</h5>
		</div>
		<div class="body py-3">
			<div class="form mb-3">
				<label for="name" class="text-gray-700">Nama Produk</label>
				<input v-model="form.name" type="text" id="name" class="w-full border-1 border-gray-200 p-2 rounded-lg">
			</div>
			<div class="form mb-3">
				<label for="price" class="text-gray-700">Harga</label>
				<input v-model="form.price" type="text" id="price" class="w-full border-1 border-gray-200 p-2 rounded-lg">
			</div>
			<div class="form mb-3">
				<label for="description" class="text-gray-700">Description (optional)</label>
				<textarea v-model="form.description" type="text" id="description" class="w-full border-1 border-gray-200 p-2 rounded-lg"></textarea>
			</div>
			<div class="form mb-3">
				<h5 class="text-gray-700 mb-1">Kategori</h5>
				<div class="wrap flex items-center gap-5">
					<label class="text-gray-700 flex items-center cursor-pointer">
						<input v-model="form.category" :value="categoryProductEnum?.makanan" name="category" type="radio" class="border-1 border-gray-200 p-2 rounded-lg w-5 h-5 cursor-pointer">
						<span class="ml-1">Makanan</span>
					</label>
					<label class="text-gray-700 flex items-center cursor-pointer">
						<input v-model="form.category" :value="categoryProductEnum?.minuman" name="category" type="radio" class="border-1 border-gray-200 p-2 rounded-lg w-5 h-5 cursor-pointer">
						<span class="ml-1">Minuman</span>
					</label>
					<label class="text-gray-700 flex items-center cursor-pointer">
						<input v-model="form.category" :value="categoryProductEnum?.snack" name="category" type="radio" class="border-1 border-gray-200 p-2 rounded-lg w-5 h-5 cursor-pointer">
						<span class="ml-1">Snack</span>
					</label>
				</div>
			</div>
			<div class="form mb-3">
				<label for="price" class="text-gray-700">Image URL (optional)</label>
				<input v-model="form.imageUrl" type="text" id="imageUrl" class="w-full border-1 border-gray-200 p-2 rounded-lg">
			</div>
			<br>
			<div class="flex items-center justify-between gap-3">
				<button @click="showModal = false" class="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-lg">Cancel</button>
				<button @click="productService?.addProduct(form); showModal = false" class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded-lg">Tambah Produk</button>
			</div>
		</div>
	</Modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import RupiahFormatAdapter from '@/adapter/RupiahFormatAdapter';
import Modal from '@/components/Modal.vue';
import { categoryProductEnum } from '../../product/IProduct.ts';
import ProductService from '@/services/ProductService.ts';
import { ProductRepository } from '@/repositories/ProductRepository.ts';
import useProductStore from '@/stores/productStore.ts';
import FoodAdapter from '@/adapter/CurrencyAdapter.ts';

const rupiahFormatAdapter = new RupiahFormatAdapter();
const showModal = ref(false);
const form = ref<{ name: string, category: categoryProductEnum, price: number, description?: string, imageUrl?: string }>({
	name: '',
	category: categoryProductEnum?.makanan,
	price: 0,
	description: undefined,
	imageUrl: undefined
});

const productRepository = new ProductRepository(useProductStore());
const productService = new ProductService(productRepository);
</script>