import Node from './node'

class Edge {

  constructor (nodeA, nodeB) {
    this.pointA = { 'x': nodeA.getX(), 'y': nodeA.getY() }
		this.pointB = { 'x': nodeB.getX(), 'y': nodeB.getY() }
		this.distanceTolerance = 20
		this.color = '#333333'
	}
	
	setDistanceTolerance = tolerance => { this.distanceTolerance = tolerance }

  draw (canvas) {
		let context = canvas.getContext('2d')
		context.beginPath();
    context.moveTo(this.pointA.x, this.pointA.y)
		context.lineTo(this.pointB.x, this.pointB.y)
		context.lineWidth = 3;
		context.strokeStyle = this.color
		context.stroke()
	}

	setSelectedColor() {
		this.color = '#77DD77'
	}

	setStandardColor() {
		this.color = '#333333'
	}
	
	isPointInside (point) {
		return this.distanceTo(point) <= this.distanceTolerance
	}

	distanceTo (point) {
		let pointA = this.pointA
		let pointB = this.pointB

		let vectorAtoB = { 
			x: pointA.x - pointB.x, 
			y: pointA.y - pointB.y 
		}
		
		let vecFromAtoPoint = {
			x: pointA.x - point.x,
			y: pointA.y - point.y
		}

		let dotProduct = (vecA, vecB) => vecA.x * vecB.x + vecA.y * vecB.y
		let euclidianDistance = (pa, pb) => Math.hypot(pa.x - pb.x, pa.y - pb.y)
	
		let epislon = dotProduct(vecFromAtoPoint, vectorAtoB) / dotProduct(vectorAtoB, vectorAtoB)
		let closest = { x: pointA.x, y: pointA.y }
		if (epislon < 0.0 || epislon > 1.0) {
			// console.log('Epsilon out of bound')
			if (euclidianDistance(point, pointA) > 
					euclidianDistance(point, pointB)) {
				closest = { x: pointB.x, y: pointB.y }
			}
		} else {
			vectorAtoB.x *= epislon
			vectorAtoB.y *= epislon
			closest.x -= vectorAtoB.x
			closest.y -= vectorAtoB.y
		}

		return euclidianDistance(point, closest);
	}
}

export default Edge;