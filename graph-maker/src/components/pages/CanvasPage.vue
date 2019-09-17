<template id="canvas-component">
  <div id="canvaspage">
    <canvas @click="canvasAction" ref="canvas"></canvas>
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
import CanvasController from '../../assets/graph_js/canvas_controller'

let canvasController = new CanvasController();

export default {
	name: 'CanvasPage',

	methods: {
		canvasAction(event) { canvasController.canvasClick(event, this) },
		dijkstraClick() { canvasController.dijkstraButton(this) },
		maxFlowClick() { canvasController.maxFlowButton(this) },
	},
	mounted() {
		canvasController.init(this)
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