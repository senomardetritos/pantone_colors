<template>
	<HeaderSite />
	<SubHeader />
	<ListColors />
</template>

<script setup>
	import { useStore } from 'vuex';
	import HeaderSite from './components/HeaderSite.vue';
	import SubHeader from './components/SubHeader.vue';
	import ListColors from './components/ListColors.vue';

	const store = useStore();
	store.dispatch('colorStore/loadColors');
	store.dispatch('colorStore/loadColors', 2);
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	@media screen and (min-width: 900px) {
		#app {
			margin: 0 100px;
		}
	}
</style>
