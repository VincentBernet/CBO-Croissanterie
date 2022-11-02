import React from 'react';

interface TimerCardProp {
  timerBeforeNextDeletionInSeconds: number | boolean;
  beginingTimer: { hours: number, minutes: number, seconds: number };
  endingTimer: { hours: number, minutes: number, seconds: number };
}


const TimerCard = ({ timerBeforeNextDeletionInSeconds, beginingTimer, endingTimer }: TimerCardProp) => {
  const messageJeuTerminé = "Le jeu est finis depuis " + endingTimer.hours + ":" + endingTimer.minutes +
    " et recommenceras demain à " + beginingTimer.hours + ":" + beginingTimer.minutes;
  const messageJeuRecommence = "Le jeu commence à " + beginingTimer.hours + ":" + beginingTimer.minutes;

  if (typeof timerBeforeNextDeletionInSeconds !== "boolean") {
    let temps: number = timerBeforeNextDeletionInSeconds;

    const timerElement = document.getElementById("timer");

    setInterval(() => {
      let hours: number | string = Math.floor(temps / 3600);
      let minutes: number | string = Math.floor(temps / 60) % 60;
      let secondes: number | string = temps % 60;

      hours = hours < 10 ? "0" + hours : hours
      minutes = minutes < 10 ? "0" + minutes : minutes
      secondes = secondes < 10 ? "0" + secondes : secondes
      if (timerElement) {
        timerElement.innerText = `${hours}:${minutes}:${secondes}`
      }
      temps = temps <= 0 ? 0 : temps - 1
    }, 1000)
  }

  return (
    <div className="TimerCard">
      <span className="TimerText">
        {
          (typeof timerBeforeNextDeletionInSeconds === "boolean") ?
            ((timerBeforeNextDeletionInSeconds === true) ? (messageJeuRecommence) : (messageJeuTerminé))
            :
            <span id="timer">
              {timerBeforeNextDeletionInSeconds}
            </span>
        }
      </span>
    </div>
  );
}

export default TimerCard;
