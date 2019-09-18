<template>
	<div class="algobox">
		<div class="bg-dark text-light p-3">
			<h5>Select your action:</h5>
			<div class="col" id="buttonlist">
				<button @click.prevent="dijkstraClick" class="btn btn-success m-3">Dijkstra</button>
				<button @click.prevent="maxFlowClick" class="btn btn-success m-3">Max Flow</button>
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