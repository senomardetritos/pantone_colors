<template>
	<div class="card-color">
		<div class="card-color-square" :style="'background-color:' + color.color + ';'"></div>
		<h1>{{ color.name }}</h1>
		<div class="card-color-data">
			<div>
				<b>Ano</b>
				<p>{{ color.year }}</p>
			</div>
			<div>
				<b>Pantone</b>
				<p>{{ color.pantone_value }}</p>
			</div>
		</div>
		<div class="card-color-count">
			<div class="card-color-button b1" @click="decrement">-</div>
			<div class="card-color-input">{{ color.count }}</div>
			<div class="card-color-button b2" @click="increment">+</div>
		</div>
	</div>
</template>

<script setup>
	import { defineProps } from 'vue';
	import { useStore } from 'vuex';

	const store = useStore();

	const props = defineProps({
		color: Object,
	});

	function increment() {
		store.commit('increment', props.color.id);
	}
    function decrement() {
		store.commit('decrement', props.color.id);
	}
</script>

<style scoped>
	.card-color {
		display: flex;
		flex-direction: column;
		width: 250px;
		height: auto;
		box-shadow: 0px 0px 5px -2px #000000;
		border-radius: 20px;
		overflow: hidden;
	}
	.card-color-square {
		width: 250px;
		height: 200px;
		border-radius: 20px;
        box-shadow: 0px -5px 10px 0px #000000;
	}
	.card-color h1 {
		text-transform: uppercase;
		font-size: 20px;
	}
	.card-color-data {
		display: flex;
		justify-content: space-between;
		padding: 0px 20px;
	}
	.card-color-data b {
		font-size: 12px;
	}
	.card-color-data p {
		margin: 0px;
		padding: 0px;
	}
	.card-color-count {
		display: flex;
		justify-content: space-between;
		padding: 20px 40px;
	}
	.card-color-count * {
		width: 33%;
		text-align: center;
		padding: 4px;
	}
	.card-color-input {
		border: 1px solid #eee;
		font-size: 14px;
        font-weight: 700;
		padding-top: 10px;
	}
	.card-color-button {
		background: #2c3d4f99;
		color: white;
		font-size: 24px;
		cursor: pointer;
	}
    .card-color-button.b1 {
        border-radius: 50px 0px 0px 50px;
    }
    .card-color-button.b2 {
        border-radius: 0px 50px 50px 0px;
    }
</style>
