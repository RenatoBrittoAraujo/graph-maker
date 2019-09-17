import Node from './node'

class CanvasController {

	constructor () {
		this.nodes = []
	}

	init (vue) {

		this.canvas = vue.$refs['canvas']
		this.context = this.canvas.getContext('2d')

		this.canvas.height = 700
		
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
		this.nodes.forEach((node) => {
			node.draw(this.context)
		})
	}

	canvasClick(event) {
		let rect = this.canvas.getBoundingClientRect()
		let clickX = event.x - rect.x
		let clickY = event.y - rect.y
		let newNode = new Node(clickX, clickY, 20)
		this.nodes.push(newNode)
		this.draw()
	}
	
	dijkstraButton() {

	}
	
	maxFlowButton() {

	}

}

export default CanvasController