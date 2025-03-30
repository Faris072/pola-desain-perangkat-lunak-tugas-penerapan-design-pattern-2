<template>
	<nav class="flex justify-between items-center sticky top-0 left-0 right-0 bg-red-500 p-10 py-5 z-50 shadow-md shadow-gray-500">
		<div class="kiri">
			<h1 class="text-white">MFS My Restaurant</h1>
		</div>
		<div class="kanan flex items-center justify-end gap-5">
			<input type="search" class="rounded-md border-1 p-2 text-white border-white focus:border-white" placeholder="Cari Produk">
			<router-link to="/master-product" class="rounded-md border-1 border-white p-2 text-white hover:bg-red-600">Master Product</router-link>
		</div>
	</nav>
</template>

<script lang="ts" setup>

</script>