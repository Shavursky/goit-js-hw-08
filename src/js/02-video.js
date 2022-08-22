import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function setCurrentTimeToLocalStorage(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
    console.log(data.seconds);
}

player.on('timeupdate', throttle(setCurrentTimeToLocalStorage, 1000));

const saveData = localStorage.getItem("videoplayer-current-time");
if(saveData) {
    const parsedData = JSON.parse(saveData);
    player.setCurrentTime(parsedData);
    console.log(parsedData);
}



