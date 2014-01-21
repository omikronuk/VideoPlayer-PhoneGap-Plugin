var VideoPlayer = function () {};

/**
* Starts the video player intent
*
* @param url           The url to play
*/
VideoPlayer.prototype.play = function(url) {
    cordova.exec(null, null, "KWVideoPlayer", "playVideo", [url]);
};

var videoPlayer = new VideoPlayer();
module.exports = videoPlayer;

