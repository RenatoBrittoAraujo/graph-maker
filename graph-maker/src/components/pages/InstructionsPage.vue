<template>
	<div class="instructionspage container mt-3">
		<h3>Needing some help with graphs?</h3>
		<p> Click on the canvas to place nodes, if you click a node already placed you select it. </p>
		<p> Click another node to create and edge. Edges come with standard weight of 1. </p>
		<p> Click an edge to set it's weight </p>
		<p> Press the 'Dijkstra' button and two nodes to perform a Dijkstra's Single Path Shortest Path (SSSP) on graph to see the shortest path from the node you clicked to the other </p>
		<p> Press on the 'Max Flow' button and two nodes to run a Min Cut/Max Flow algorithm and get the result </p>
		
	</div>
</template>

<script>
export default {
	name: 'InstructionsPage'
}
</script>

<style scoped>

</style>