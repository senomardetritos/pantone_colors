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
	const list_colors = computed(() => store.state.colorStore.colors);
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
