<template>
	<div :class="`relative z-10 ${props?.class}`" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<!--
			Background backdrop, show/hide based on modal state.

			Entering: "ease-out duration-300"
			From: "opacity-0"
			To: "opacity-100"
			Leaving: "ease-in duration-200"
			From: "opacity-100"
			To: "opacity-0"
		-->
		<div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

		<div @click="$emit('hide')" class="fixed inset-0 z-10 w-screen overflow-y-auto">
			<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
				<!--
					Modal panel, show/hide based on modal state.

					Entering: "ease-out duration-300"
					From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					To: "opacity-100 translate-y-0 sm:scale-100"
					Leaving: "ease-in duration-200"
					From: "opacity-100 translate-y-0 sm:scale-100"
					To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
				-->
				<div @click.stop class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg z-50">
					<div class="bg-white p-4 z-50">
						<slot></slot>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
	(e: 'hide'): void
}>();
const props = defineProps<{
	class?: string
}>();
</script>