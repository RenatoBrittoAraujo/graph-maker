<template id="canvas-component">
  <div id="canvaspage">
    <canvas @click="canvasAction" height="720" ref="canvas" class="unselectable">
		</canvas>
		<div class="actionbar bg-dark text-white w-100">		
			<div v-if="edgeSelect">
				<InputBox @edge-weight="addEdgeWeight" :current="setWeight"/>
			</div>
			<div v-else>
				<AlgoBox @dijkstra="dijkstraClick" @maxflow="maxFlowClick" @dfs="dfs"/>
			</div>
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
			edgeSelect: false,
			setWeight: 0
		}
	},
	methods: {
		canvasAction(event) { 
			this.edgeSelect = canvasController.canvasClick(event)
			if (this.edgeSelect == true) {
				this.setWeight = canvasController.getWeight()
			}
		},
		makeToast(variant = null, message) {
			this.$bvToast.toast(message, {
				title: variant == 'danger' ? 'Warning' : 'Result',
				variant: variant,
				solid: true,
				toaster: 'b-toaster-top-center'
			})
		},
		dijkstraClick() { 
			if (canvasController.getNodeCount() < 2) {
				this.makeToast('danger', 'You need to add more node to run Dijkstra')
			} else {
				this.makeToast('success', 'Shortest path length: ' + canvasController.dijkstraButton()) 
			}
		},
		maxFlowClick() { 
			canvasController.maxFlowButton() 
		},
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
	.danger{
		background-color: rgb(255, 147, 147);
	}
	.actionbar {
    height: 18%;
		position: absolute;
	}
</style>