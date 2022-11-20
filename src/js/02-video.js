import Player from "@vimeo/player";
import Throttle from "lodash.throttle";

//let myStorage = window.localStorage;
const keyLS = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const duration = player.getDuration();

player.on('timeupdate', Throttle(saveCurrentTimeToLS, 1000));

function saveCurrentTimeToLS(evt) {
    let currentTime = evt.seconds;
    localStorage.setItem(keyLS, currentTime);
    
  // console.log('Current time:', currentTime);
  // console.log(localStorage.getItem(keyLS));
    };
if (localStorage.getItem(keyLS)) {
player.setCurrentTime(localStorage.getItem(keyLS));    
}


// якщо відео переглянуто повністю - видаляємо з Local Storage інформацію по ключу

//function clearLocalStorage(duration) {
//    if (Math.round(localStorage.getItem(keyLS)) === Math.round(duration)) {
    //localStorage.removeItem(keyLS);
    //localStorage.setItem(keyLS, 0);
//    console.log("zeroed");
//};

//};

    //console.log('time to begin:', localStorage.getItem(keyLS));
