class Edge {

  constructor (nodeA, nodeB) {
    this.pointA = { 'x': nodeA.getX(), 'y': nodeA.getY() }
    this.pointB = { 'x': nodeB.getX(), 'y': nodeB.getY() }
  }

  draw (context) {
    context.moveTo(this.pointA.x, this.pointA.y)
    context.lineTo(this.pointB.x, this.pointB.y)
    context.stroke()
  }

}

export default Edge