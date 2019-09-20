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
		let newEdge = new GraphEdge(nodeA.getId(), nodeB.getId(), edge.getId())
		nodeA = this.getNode(nodeA.getId())
		nodeB = this.getNode(nodeB.getId())
		nodeA.addNeighbor(nodeB, newEdge)
		nodeB.addNeighbor(nodeA, newEdge)
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
			if (edge.id == id) {
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
		node.neighbors.forEach((neighbor) => {
			if (!visited[neighbor.id]) {
				this.rdfs(neighbor, visited)
			}
		})
	}

	dijkstra(sourceID, destinationID) {
		let distances = []
		for (let i = 0; i < this.nodes.length; i++) {
			if (i !== sourceID) {
				distances.push(Infinity)
			} else {
				distances.push(0)
			}
		}
		let pq = [{ distance: distances[sourceID], id: sourceID }]
		while (pq.length > 0) {
			pq.sort((objA, objB) => {
				return objA.distance < objB.distance
			})
			let top = pq[pq.length - 1]
			pq.pop()
			if (top.distance > distances[top.id]) {
				continue;
			}
			this.nodes[top.id].neighbors.forEach((neighbor) => {
				if (distances[top.id] + neighbor.edge.weight < distances[neighbor.node.id]) {
					distances[neighbor.node.id] = Number(distances[top.id]) + Number(neighbor.edge.weight)
					pq.push({ distance: distances[neighbor.node.id], id: neighbor.node.id })
				}
			})
		}
		return distances[destinationID]
	}


}

class GraphNode {
	
	constructor(id) {
		this.neighbors = []
		this.id = id
	}

	addNeighbor(node, edge) {
		this.neighbors.push({ node: node, edge: edge })
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