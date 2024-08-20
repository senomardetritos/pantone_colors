<template>
	<header>
		<h1 class="logo">PANTONE COLORS</h1>
		<div class="links">
			<a href="#">TODAS</a>
			<a href="#">ADICIONADAS</a>
		</div>
	</header>
</template>

<script setup></script>

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
        padding: 12px;
        color: #2c3e50;
	}
</style>
