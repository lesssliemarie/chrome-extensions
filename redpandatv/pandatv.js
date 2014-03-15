getVideo = function() {
	console.log('here');

	var videos = [
	
	'https://www.youtube.com/embed/y6GaPkkGZGw?autoplay=1',
	'https://www.youtube.com/embed/7Se6flT2EWs?autoplay=1',
	'https://www.youtube.com/embed/oimTxlCi36E?autoplay=1',
	'https://www.youtube.com/embed/Ff6XeoMsvkk?autoplay=1',
	'https://www.youtube.com/embed/_k3k58Vn2Fc?autoplay=1',
	'https://www.youtube.com/embed/jVZA-22fp8I?autoplay=1',
	'https://www.youtube.com/embed/geUJsk_pQvA?autoplay=1',
	'https://www.youtube.com/embed/FpQc7J7VxIM?autoplay=1',
	'https://www.youtube.com/embed/jr0RxqP5BLs?autoplay=1',
	'https://www.youtube.com/embed/YNz6EV0EFfY?autoplay=1',
	'https://www.youtube.com/embed/EZYwjsDvSZE?autoplay=1',
	'https://www.youtube.com/embed/fFTvqpxSaRw?autoplay=1',
	'https://www.youtube.com/embed/Xam7hN4rinw?autoplay=1',
	'https://www.youtube.com/embed/9y4dgIjsoZ4?autoplay=1',
	'https://www.youtube.com/embed/ilQznV-vk_U?autoplay=1',
	'https://www.youtube.com/embed/VrRdfXjAJHU?autoplay=1'

	];

	var video = videos[Math.floor(Math.random()*videos.length)];

	var URL = document.getElementById('pandaplayer').src;
	URL = video;
	var player = document.getElementById('playerWrapper');
	player.innerHTML = "<iframe id ='pandaplayer' width='560' height='315' src='" + video + "' frameborder='1' allowfullscreen></iframe>";


}

window.onload = getVideo;

var getMore = document.getElementById('morepanda');
getMore.onclick = getVideo;