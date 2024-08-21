<template>
	<div class="list-colors">
		<div v-for="(color, i) in list_colors" :key="i">
			<CardColor :color="color" />
		</div>
	</div>
</template>

<script setup>
	import { computed } from 'vue';
	import { useStore } from 'vuex';
	import CardColor from './CardColor.vue';
	const store = useStore();
	const filter = computed(() => store.getters['filterStore/getSelected']);
	const list_colors = computed(() => {
		if (filter.value == 'TODAS') {
			return store.state.colorStore.colors;
		} else {
			return store.state.colorStore.colors.filter((item) => {
				if (item.count > 0) return true;
				return false;
			});
		}
	});
</script>

<style scoped>
	.list-colors {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 48px;
		margin-top: 36px;
	}
</style>
