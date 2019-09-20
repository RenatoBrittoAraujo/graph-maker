<template>
	<div class="algobox">
		<div class="p-3">
			<h5>Select your action:</h5>
			<div class="col" id="buttonlist">
				<button @click="$emit('dijkstra')" class="btn btn-success m-3">Dijkstra</button>
				<button @click="$emit('maxflow')" class="btn btn-success m-3">Max Flow</button>
				<button @click="$emit('dfs')" class="btn btn-success m-3">DFS</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AlgoBox'
}
</script>

<style scoped>

</style>