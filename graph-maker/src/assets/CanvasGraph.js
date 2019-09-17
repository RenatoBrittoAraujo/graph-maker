let value = 0

export function init(vue) {
	let context = vue.$refs['canvas'].getContext('2d')
	context.beginPath();
	context.moveTo(100, 100);
	context.lineTo(200, 200);
	context.fillStyle = 'rgb(0,0,0)';
	context.stroke();
}

export function canvasClick(event, vuething) {
	var canvas = vuething.$refs['canvas'];
	var context = canvas.getContext('2d');
	var centerX = canvas.width / 2;
	var centerY = canvas.height / 2;
	var radius = 70;

	context.beginPath();
	context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	context.fillStyle = 'green';
	context.fill();
	context.lineWidth = 5;
	context.strokeStyle = '#003300';
	context.stroke();
}

export function dijkstraButton(element) {
	value--
}

export function maxFlowButton(element) {
	value += 2
}

// setInterval(() => {
// 	console.log(value)
// }, 1000);