<template id="canvas-component">
  <div id="canvaspage">
    <canvas @click="canvasAction" height="700" ref="canvas" class="unselectable"></canvas>
    <div id="filler p-1">
			<div class="bg-dark text-light p-3">
				<h5>Select your action:</h5>
				<div class="col" id="buttonlist">
					<button @click.prevent="dijkstraClick" class="btn btn-success m-3">Dijkstra</button>
					<button @click.prevent="maxFlowClick" class="btn btn-success m-3">Max Flow</button>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
/* Personal Lib */
import CanvasController from '../../assets/graph_js/canvas_controller'

let canvasController = new CanvasController();

export default {
	name: 'CanvasPage',
	methods: {
		canvasAction(event) { canvasController.canvasClick(event) },
		dijkstraClick() { canvasController.dijkstraButton() },
		maxFlowClick() { canvasController.maxFlowButton() },
	},
	mounted() {
		canvasController.init(this)
	}
}
</script>

<style scoped>
	canvas {
		background-color: #F5FBEF;
	}
	buttonlist {
		margin: 1%;
	}
	.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
	}
</style>