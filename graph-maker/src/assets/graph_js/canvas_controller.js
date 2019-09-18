import Node from './node'
import Edge from './edge'

class CanvasController {

	// Class initialization

	constructor () {
		this.nodes = []
		this.edges = []

		this.NODE_RADIUS = 20

		this.nodeSelect = false
		this.nodeSelection = null

		this.edgeSelect = false
		this.edgeSelection = null
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
			edge.draw(this.canvas)
		})
		this.nodes.forEach((node) => {
			node.draw(this.canvas)
		})
	}

	canvasClick(event) {

		let rect = this.canvas.getBoundingClientRect()
		let x = event.x - rect.x
		let y = event.y - rect.y
		let point = { x, y }

		let node = this.findNode(point)
		let edge = this.findEdge(point)

		if (edge && !node) {

			if (!this.edgeSelection && !this.edgeSelect) {
				this.selectEdge(edge)
			} else {
				this.deselectEdge()
			}
			this.deselectNode()

		} else if (node && !this.nodeSelect) {

			this.deselectEdge()
			this.deselectNode()
			this.selectNode(node)

		} else if (node && node != this.nodeSelection && this.nodeSelect) {

			this.createNewEdge(this.nodeSelection, node)
			this.deselectNode()
			this.deselectEdge()

		} else {

			this.createNewNode(point)
			this.deselectNode()
			this.deselectEdge()

		}

		this.draw();

		return this.edgeSelect
	}

	canvasHold() {

	}

	createNewEdge(nodeA, nodeB) {
		let newEdge = new Edge(nodeA, nodeB)
		newEdge.setDistanceTolerance = this.NODE_RADIUS
		this.edges.push(newEdge)
	}

	selectEdge(edge) {
		this.edgeSelect = true
		this.edgeSelection = edge
		this.edgeSelection.setSelectedColor()
	}

	deselectEdge() {
		this.edgeSelect = false
		if (!this.edgeSelection) {
			return
		}
		this.edgeSelection.setStandardColor()
		this.edgeSelection = null
	}

	selectNode(node) {
		this.nodeSelect = true
		this.nodeSelection = node
		this.nodeSelection.setSelectedColor()
	}

	deselectNode() {
		this.nodeSelect = false
		if (!this.nodeSelection) {
			return
		}
		this.nodeSelection.setStandardColor()
		this.nodeSelection = null
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

	findEdge (point) {
		let foundEdge = null
		let distance = Infinity
		this.edges.forEach((edge) => {
			if ((edge.isPointInside(point) && !foundEdge) || 
					(foundEdge && edge.distanceTo(point) < distance)) {
				foundEdge = edge
				distance = edge.distanceTo(point)
			}
		})
		return foundEdge
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