function doFirst(){
		var x = document.getElementById("myCanvas");	
		var myCanvas = x.getContext('2d');
		
		myCanvas.font="30px Arial";
		//myCanvas.textAlign="start";
		myCanvas.strokeText("asd",10,50)		
	}
window.addEventListener("load", doFirst, false);