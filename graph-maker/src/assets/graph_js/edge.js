class Edge {

  constructor (nodeA, nodeB) {
    this.pointA = { 'x': nodeA.getX(), 'y': nodeA.getY() }
		this.pointB = { 'x': nodeB.getX(), 'y': nodeB.getY() }
		this.distanceTolerance = 10
	}
	
	setDistanceTolerance = tolerance => this.distanceTolerance = tolerance 

  draw (context) {
    context.moveTo(this.pointA.x, this.pointA.y)
    context.lineTo(this.pointB.x, this.pointB.y)
    context.stroke()
	}
	
	isPointInside (point) {

	}

	distanceTo (point) {
		let cx = point.x
		let cy = point.y

		let vecFromAtoB = { 
			x: nodeA.x - nodeB.x, 
			y: nodeA.y - nodeB.y 
		}

		let vecFromAtoPoint = {
			x: nodeA.x - cx,
			y: nodeA.y - cy
		}

		let dotProduct = (vecA, vecB) => vecA.x * vecB.x + vecA.y * vecB.y
		let euclidianDistance = (pointA, pointB) => Math.hypot(pointA.x - pointB.x, pointA.y - pointB.y)
		
		let epislon = dotProduct(vecFromAtoPoint, vectorAtoB) / dotProduct(vectorAtoB, vectorAtoB)
		let closest = nodeA
		if (epislon < 0.0 || epislon > 1.0) {
			if (euclidianDistance(point, nodeA) > 
					euclidianDistance(point, nodeB)) {
						closest = nodeB
			}
		} else {
			vectorAtoB.x *= epislon
			vectorAtoB.y *= epislon
			closest.x += vectorAtoB.x
			closest.y += vectorAtoB.y
		}
		return euclidianDistance(point, closest);
	}
}

export default Edge;