function doFirst(){
		var x = document.getElementById('myCanvas');
		canvas = x.getContext('2d');
		
		canvas.shadowOffsetX = 4;
		canvas.shadowOffsetY = 4;
		canvas.shadowBlur = 6;
		canvas.shadowColor = 'rgba(0,0,255,.5)';
		
		canvas.font = "bold 36px Tahoma";
		canvas.textAlign = "end";
		canvas.fillText = ("omgwrt",200,100);
		
	}
window.addEventListener("load", doFirst, false);