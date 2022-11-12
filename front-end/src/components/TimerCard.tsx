import React from 'react';
import { retrieveApiCall } from '../utils/callApi';
import { timeFormat } from '../utils/interface';
import { getInitialTimer } from '../utils/timer';

interface TimerCardProp {
  timerBeforeNextDeletionInSeconds: number | boolean;
  beginingTimer: timeFormat;
  endingTimer: timeFormat;
}

const TimerCard = ({ timerBeforeNextDeletionInSeconds, beginingTimer, endingTimer }: TimerCardProp) => {
  const gameIsStillRunning = (typeof timerBeforeNextDeletionInSeconds !== "boolean");
  const gameHasNotYetStarted: boolean = timerBeforeNextDeletionInSeconds === false;

  const messageJeuTerminé = "Le jeu est finis depuis " + endingTimer.hours + ":" + endingTimer.minutes +
    " et recommenceras demain à " + beginingTimer.hours + ":" + beginingTimer.minutes;
  const messageJeuRecommence = "Le jeu commence à " + beginingTimer.hours + ":" + beginingTimer.minutes;

  if (gameIsStillRunning) {
    let temps: number = timerBeforeNextDeletionInSeconds;
    console.log("Nombre de seconde : " + temps);

    setInterval(() => {
      const timerElement = document.getElementById("timer");
      let hours: number | string = Math.floor(temps / 3600);
      let minutes: number | string = Math.floor(temps / 60) % 60;
      let secondes: number | string = temps % 60;
      console.log("Nombre seconde : " + secondes + " Nombre minute : " + minutes + " Nombre heure : " + hours);

      /*hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      secondes = secondes < 10 ? "0" + secondes : secondes;*/
      //console.log("Nombre seconde : " + secondes + " Nombre minute : " + minutes + " Nombre heure : " + hours);

      if (timerElement) {
        timerElement.innerText = `${hours}:${minutes}:${secondes}`;
      }
      temps = temps <= 0 ? 0 : temps - 1;
      if (temps = 0) {
        retrieveApiCall().then((data) => { console.log("Dring dring calling api") });
      }
    }, 1000);
  }

  return (
    <div className="TimerCard">
      <span className="TimerText">
        {
          (!gameIsStillRunning) ?
            ((gameHasNotYetStarted) ? (messageJeuRecommence) : (messageJeuTerminé)) :
            <span id="timer">
              {getInitialTimer(timerBeforeNextDeletionInSeconds)}
            </span>
        }
      </span>
    </div>
  );
}

export default TimerCard;