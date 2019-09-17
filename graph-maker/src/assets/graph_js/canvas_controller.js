import Node from './node'
import Edge from './edge'

class CanvasController {

	// Class initialization

	constructor () {
		this.nodes = []
		this.edges = []
		this.NODE_RADIUS = 20
		this.selection = false
		this.firstSelection = null
	}

	// Public

	init (vue) {

		this.canvas = vue.$refs['canvas']
		this.context = this.canvas.getContext('2d')
		
		vue.$nextTick(()=> {
			this.canvas.width = window.innerWidth
		})

		let draw = () => { this.draw() }
		
		vue.$nextTick(() => {
			window.addEventListener('resize', () => {
				this.canvas.width = window.innerWidth;
				draw()
			})
		})
	}
		
	draw() {
		this.edges.forEach((edge) => {
			edge.draw(this.context)
		})
		this.nodes.forEach((node) => {
			node.draw(this.context)
		})
	}

	canvasClick(event) {
		let rect = this.canvas.getBoundingClientRect()
		let x = event.x - rect.x
		let y = event.y - rect.y
		let point = { x, y }
		let node = this.findNode(point)
		if (node && !this.selection) {
			this.selectNode(node)
		} else if (node && node != this.firstSelection && this.selection) {
			this.createNewEdge(this.firstSelection, node)
			this.deselectNode()
		} else {
			this.createNewNode(point)
			if (this.selection) {
				this.deselectNode()
			}
		}
		this.draw();
	}

	canvasHold() {

	}

	createNewEdge(nodeA, nodeB) {
		let newEdge = new Edge(nodeA, nodeB)
		this.edges.push(newEdge)
	}

	selectNode(node) {
		this.selection = true
		this.firstSelection = node
		this.firstSelection.setSelectedColor()
	}

	deselectNode() {
		this.selection = false
		this.firstSelection.setStandardColor()
		this.firstSelection = null
	}
	
	dijkstraButton() {

	}
	
	maxFlowButton() {

	}

	// Private

	findNode (point) {
		let foundNode = null
		this.nodes.forEach((node) => {
			if (node.isPointInside(point)) {
				foundNode = node
			}
		})
		return foundNode
	}

	neighborhoodCheck(point) {
		let ok = true
		this.nodes.forEach((node) => {
			if (Math.hypot( node.x - point.x, node.y - point.y ) <= this.NODE_RADIUS * 2) {
				ok = false;
			}
		})
		return ok;
	}

	createNewNode(point) {
		if (!this.neighborhoodCheck(point)) {
			return
		}
		let newNode = new Node(point.x, point.y, this.NODE_RADIUS)
		this.nodes.push(newNode)
	}


}

export default CanvasController