function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	x.strokeRect(10,10,100,200);	
}
window.addEventListener("load", doFirst, false);