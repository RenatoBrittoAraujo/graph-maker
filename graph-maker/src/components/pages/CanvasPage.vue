<template id="canvas-component">
  <div id="canvaspage">
    <canvas @click="canvasAction" ref="canvas" height="500"></canvas>
    <div class="bg-dark m-3 text-light p-3">
      <h5>Select your action:</h5>
      <div class="col" id="buttonlist">
        <button @click.prevent="dijkstraClick" class="btn btn-success m-3">Dijkstra</button>
        <button @click.prevent="maxFlowClick" class="btn btn-success m-3">Max Flow</button>
      </div>
    </div>
  </div>
</template>

<script>
import { init, canvasClick, dijkstraButton, maxFlowButton } from '../../assets/CanvasGraph'
export default {
	name: 'CanvasPage',
	methods: {
		canvasAction(event) { canvasClick(event, this) },
		dijkstraClick() { dijkstraButton(this) },
		maxFlowClick() { maxFlowButton(this) },
	},
	mounted() {
		init(this)
	}
}
</script>

<style scoped>
	canvas {

		background-color:cornsilk;
	}
	buttonlist {
		margin: 1%;
	}
</style>