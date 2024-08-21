<template>
	<header>
		<h1 class="logo">PANTONE COLORS</h1>
		<div class="links">
			<a href="#" :class="selected == 'TODAS' ? 'active' : ''" @click="select('TODAS')">TODAS</a>
			<a href="#" :class="selected == 'ADICIONADAS' ? 'active' : ''" @click="select('ADICIONADAS')">ADICIONADAS</a>
		</div>
	</header>
</template>

<script setup>
	import { computed } from 'vue';
	import { useStore } from 'vuex';

	const store = useStore();
	const selected = computed(() => store.getters['filterStore/getSelected']);

	function select(item) {
		store.commit('filterStore/setSelected', item);
	}
</script>

<style scoped>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 14px 0;
		border-bottom: 1px solid #eee;
	}

	header .logo {
		font-weight: 900;
		font-size: 24px;
	}

	header a {
		font-weight: 900;
		font-size: 14px;
		text-decoration: none;
		padding: 12px 0px;
		margin: 0px 12px;
		color: #2c3e50;
	}
	header a.active {
		border-bottom: 3px solid #2c3e50;
	}
</style>
