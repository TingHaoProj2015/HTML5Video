var playList =[];
var position =0;
var video;

window.onload= function(){
	playList = [
		"video/test1",
		"video/test2",
		"video/test3"
	];

	video = document.getElementById('video');
	video.addEventListener('ended',nextVideo);
	playVideo(position);

};

function getFormatExtension(){
	if (video.canPlayType("video/mp4")!==""){
		return ".mp4";
	}else if (video.canPlayType("video/ogg")!==""){
		return ".ogv";
	}else if (video.canPlayType("video/webm")!==""){
		return ".webM";
	}

}

function nextVideo(){
	position++; // 下一段
	if (position >= playList.length){
		position=0;
	}
	playVideo(position);

}

function playVideo(position){
	video.src = playList[position] + getFormatExtension();
	video.load();
	video.play();
}

