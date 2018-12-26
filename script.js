window.onload = function () {
	setInterval(clock, 1000);
}

function clock() {
	var now = new Date();
	var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
	document.getElementById("clock").innerHTML = time;
}