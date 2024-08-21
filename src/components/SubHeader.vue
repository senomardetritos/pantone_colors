<template>
	<div class="sub-header">
		<div class="sub-header-item">
			<b>Total Adicionadas</b>
			<p>{{ totalCount }}</p>
		</div>
		<div class="sub-header-item">
			<b>Cores Adicionadas</b>
			<p>{{ totalColors }}</p>
		</div>
		<div class="sub-header-item">
			<b>Total Cores</b>
			<p>{{ colorsCount }}</p>
		</div>
	</div>
</template>

<script setup>
	import { computed } from 'vue';
	import { useStore } from 'vuex';

	const store = useStore();
	const totalCount = computed(() => store.getters['colorStore/totalCount']);
	const totalColors = computed(() => store.getters['colorStore/totalColors']);
	const colorsCount = computed(() => store.getters['colorStore/colorsCount']);
</script>

<style scoped>
	.sub-header {
		display: flex;
		justify-content: space-between;
		padding: 16px 8px;
        border-bottom: 1px solid #eee;
	}
	.sub-header-item b {
		font-size: 12px;
	}
	.sub-header-item p {
		margin: 0;
		padding: 0;
	}
</style>
