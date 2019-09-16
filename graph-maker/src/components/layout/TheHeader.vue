<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<a class="navbar-brand" href="/">
			<img src="../../assets/logo.png" width="auto" height="25" alt="">
			<b>GRAPH MAKER</b>
		</a>
		<ul class="navbar-nav ml-auto" style="display:inline">
			<li class="nav-item list-inline-item mr-3">
				<a class="nav-link" href="/about">About</a>
			</li>
			<li class="nav-item list-inline-item">
				<a class="nav-link" href="/instructions">Instructions</a>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'TheHeader',
}
</script>

<style>
	img {
		-webkit-filter: brightness(0) invert(1);
		filter: brightness(0) invert(1);
	}
</style>