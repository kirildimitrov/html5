function doFirst(){
	barSize=600;
	myMovie=document.getElementById('myMovie');
	playButton=document.getElementById('playButton');	
	defaultBar=document.getElementById('defaultBar');
	progressBar=document.getElementById('progressBar');	
	
	playButton.addEventListener('click', playOrPause, false);
	defaultBar.addEventListener('click', clickedBar, false);
}

function playOrPause(){
	if(myMovie.paused && !myMovie.ended){
		myMovie.pause();
		playButton.innerHTML = 'Play';
		window.clearInterval(updateBar);
	}
	else{
		myMovie.play();
		playButton.innerHTML = 'Pause';
		updateBar = setInterval(update, 500);
	}
}