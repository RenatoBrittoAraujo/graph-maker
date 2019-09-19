import Node from './node'
import Edge from './edge'

class Graph {

	constructor() {
		this.nodes = []
		this.edges = []
	}

	addNode(node) {
		let newNode = new GraphNode(node.getId())
		this.nodes.push(newNode)
	}

	addEdge(edge, nodeA, nodeB) {
		let newEdge = new GraphEdge(nodeA.getId(), nodeB.getId())
		nodeA = this.getNode(nodeA.getId())
		nodeB = this.getNode(nodeB.getId())
		nodeA.addNeighbor(nodeB)
		nodeB.addNeighbor(nodeA)
		this.edges.push(newEdge)
	}

	getNode(id) {
		let snode = null
		this.nodes.forEach((node) => {
			if (node.id == id) {
				snode = node
			}
		})
		return snode
	}

	getEdge(id) {
		let sedge = null
		this.edges.forEach((edge) => {
			if (edge.id === id) {
				sedge = edge
			}
		})
		return sedge
	}

	dfs(id) {
		let node = this.getNode(id)
		let visited = []
		for (let i = 0; i < this.nodes.length; i++) {
			visited.push(false)
		}
		this.rdfs(node, visited)
	}

	rdfs(node, visited) {
		visited[node.id] = true
		console.log('Visiting node ' + node.id)
		node.neighbors.forEach((neighbor) => {
			if (!visited[neighbor.id]) {
				this.rdfs(neighbor, visited)
			}
		})
	}

}

class GraphNode {
	
	constructor(id) {
		this.neighbors = []
		this.id = id
	}

	addNeighbor(node) {
		this.neighbors.push(node)
	}

}

class GraphEdge {

	constructor(nodeA, nodeB, id) {
		this.weight = 1
		this.id = id
	}

	getWeight = () => this.weight

	

}

export default Graph