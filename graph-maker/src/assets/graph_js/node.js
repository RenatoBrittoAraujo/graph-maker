class Node {

	constructor (centerX, centerY, radius) {
		this.centerX = centerX
		this.centerY = centerY
		this.radius = radius
	}

	draw(context) {
    context.beginPath();
    context.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
    context.fillStyle = '#ffffff';
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = '#003300';
    context.stroke();
  }
}

export default Node