function doFirst(){
	var x = document.getElementById('myCanvas');
	canvas = x.getContext('2d');
	var g = canvas.createLinearGradient(0,0,100,100);
	g.addColorStop(.0,"blue");
	g.addColorStop(1,"red");
}
window.addEventListener("load", doFirst, false);