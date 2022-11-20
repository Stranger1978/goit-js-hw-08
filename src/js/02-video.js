import Player from "@vimeo/player";
import Throttle from "lodash.throttle";

//let myStorage = window.localStorage;
const keyLS = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

player.on('timeupdate', Throttle(saveCurrentTimeToLS, 1000));

function saveCurrentTimeToLS(evt) {
    let currentTime = evt.seconds;
    localStorage.setItem(keyLS, currentTime);
  //  console.log('Current time:', currentTime);
  //  console.log(myStorage.getItem(keyLS));
    };

player.setCurrentTime(localStorage.getItem(keyLS));

    //console.log('time to begin:', localStorage.getItem(keyLS));