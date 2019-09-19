let id = 0

class Node {

	constructor (x, y, radius) {
		this.x = x
		this.y = y
    this.radius = radius
		this.setStandardColor()
		this.id = id
		id++
	}

	getId = () => this.id

	toString() {
		return 'Node ' + this.id.toString()
	}

	draw(canvas) {
		let context = canvas.getContext('2d')
    context.beginPath();
		context.lineWidth = 0
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
		context.fillStyle = this.color;
    context.fill();
  }

  isPointInside(point) {
    return Math.hypot( point.x - this.x, point.y - this.y ) <= this.radius
  }

  setSelectedColor() {
    this.color = '#A6C48A'
  }

  setStandardColor() {
    this.color = '#F56960'
  }

  getX = () => this.x
  getY = () => this.y

}

export default Node