window.onload = function() {
	clock();
	setInterval(clock, 1000);
};

function formatarNum(x) { //Retorna digitos com duas casas
	for(var i = 0; i <= x.length; i++) {
		var str = new String(x[i]);
		if(str.length < 2) {
			str = 0 + str;
			x[i] = str;
		}
	}
	return(x[0] + ":" + x[1] + ":" + x[2]);
}

function clock() {
	var now = new Date();
	var x = [];
	x.push(now.getHours(), now.getMinutes(), now.getSeconds());
	document.getElementById("clock").innerHTML = formatarNum(x);
}