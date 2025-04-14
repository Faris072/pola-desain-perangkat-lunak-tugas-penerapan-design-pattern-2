<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script lang="ts" setup>
	import { onBeforeMount, onBeforeUnmount } from 'vue';
	import useCurrencyStore from './stores/currencyStore';
	import useOrderStore from './stores/orderStore';
	import useProductStore from './stores/productStore';

	const productStore = useProductStore();
	const orderStore = useOrderStore();
	const currencyStore = useCurrencyStore();

	onBeforeMount(() => {
		productStore?.init();
		orderStore?.init();
		currencyStore?.init();
	});
</script>