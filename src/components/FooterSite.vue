<template>
	<div class="footer">
		<div class="footer-item">
			<h3>Lucas Torres dos Anjos</h3>
			<p>Projeto em Vue 3 e Vuex</p>
		</div>
		<div class="footer-item">
			<h3>Free API</h3>
			<a href="https://reqres.in/api/unknown?page=" target="_blank">https://reqres.in/api/unknown?page=1</a>
		</div>
	</div>
</template>

<style scoped>
	.footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 1px solid #eee;
		margin: 24px 0px;
	}
    .footer .footer-item {
        margin: 24px;
    }
	.footer h3,
	.footer p {
		margin: 4px 0px;
	}
</style>
