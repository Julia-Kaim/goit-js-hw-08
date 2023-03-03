import "../css/common.css";
import Player from "@vimeo/player";
import { throttle } from "lodash";
const player = new Player("vimeo-player", {});
const CURRENT_TIME_KEY = "videoplayer-current-time";
const iframe = document.querySelector("iframe");
// const player = new Vimeo.Player(iframe);
const onPlay = (data) => {
	const dataStringify = JSON.stringify(data);
	localStorage.setItem(CURRENT_TIME_KEY, dataStringify);
};
player.on("timeupdate", throttle(onPlay, 1000));

const resume = () => {
	if (JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) === null) {
		return;
	}
	const pause = JSON.parse(localStorage.getItem(CURRENT_TIME_KEY))["seconds"];
	if (pause) {
		player
			.setCurrentTime(pause)
			.then(function (seconds) {})
			.catch(function (error) {
				switch (error.name) {
					case "Error":
						break;
					default:
						break;
				}
			});
	}
};
resume();
// player.getVideoTitle().then(function (title) {
// 	console.log("title:", title);
// });

// player
// 	.setCurrentTime(30.456)
// 	.then(function (seconds) {
// 		// seconds = the actual time that the player seeked to
// 	})
// 	.catch(function (error) {
// 		switch (error.name) {
// 			case "RangeError":
// 				// the time was less than 0 or greater than the video’s duration
// 				break;

// 			default:
// 				// some other error occurred
// 				break;
// 		}
// 	});
