function doFirst(){
	barSize=600;
	myMovie=document.getElementById('myMovie');
	playButton=document.getElementById('playButton');	
	defaultBar=document.getElementById('defaultBar');
	progressBar=document.getElementById('progressBar');	
	
	playButton.addEventListener('click', playOrPause, false);
	defaultBar.addEventListener('click', clickedBar, false);
}