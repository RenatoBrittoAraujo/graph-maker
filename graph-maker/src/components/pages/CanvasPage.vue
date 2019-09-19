<template id="canvas-component">
  <div id="canvaspage">
    <canvas @click="canvasAction" height="700" ref="canvas" class="unselectable"></canvas>
    <div id="filler p-1" v-if="edgeSelect">
			<InputBox @edge-weight="addEdgeWeight"/>
		</div>
		<div v-else>
			<AlgoBox @dijkstra="dijkstraClick" @maxflow="maxFlowClick" @dfs="dfs"/>
		</div>
  </div>
</template>

<script>
/* Personal Lib */
import CanvasController from '../../assets/graph_js/canvas_controller'

/* Other vue componenets */
import AlgoBox from './vanvas_page_layout/AlgoBox'
import InputBox from './vanvas_page_layout/InputBox'

let canvasController = new CanvasController();

export default {
	name: 'CanvasPage',
	components: {
		AlgoBox,
		InputBox
	},
	data() {
		return {
			edgeSelect: false
		}
	},
	methods: {
		canvasAction(event) { 
			this.edgeSelect = canvasController.canvasClick(event)
		},
		dijkstraClick() { canvasController.dijkstraButton() },
		maxFlowClick() { canvasController.maxFlowButton() },
		addEdgeWeight(weight) {
			canvasController.addEdgeWeight(weight);
			this.edgeSelect = false
		},
		dfs() {
			canvasController.dfs()
		}
	},
	mounted() {
		canvasController.init(this)
		this.edgeSelect = false
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