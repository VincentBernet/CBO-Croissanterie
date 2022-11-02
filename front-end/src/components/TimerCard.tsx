import React from 'react';

interface TimerCardProp {
  timerBeforeNextDeletionInSeconds: number | boolean;
  beginingTimer: { hours: number, minutes: number, seconds: number };
  endingTimer: { hours: number, minutes: number, seconds: number };
}

const numberToDigitString = (number: number,): string => {
  if (number < 10) { return "0" + number; }
  return number.toString();
}

const TimerCard = ({ timerBeforeNextDeletionInSeconds, beginingTimer, endingTimer }: TimerCardProp) => {
  const messageJeuTerminé = "Le jeu est finis depuis " + endingTimer.hours + ":" + endingTimer.minutes +
    " et recommenceras demain à " + beginingTimer.hours + ":" + beginingTimer.minutes;
  const messageJeuRecommence = "Le jeu commence à " + beginingTimer.hours + ":" + beginingTimer.minutes;

  if (typeof timerBeforeNextDeletionInSeconds !== "boolean") {
    let temps: number = timerBeforeNextDeletionInSeconds;

    setInterval(() => {
      const timerElement = document.getElementById("timer");
      let hours: number | string = Math.floor(temps / 3600);
      let minutes: number | string = Math.floor(temps / 60) % 60;
      let secondes: number | string = temps % 60;

      hours = hours < 10 ? "0" + hours : hours
      minutes = minutes < 10 ? "0" + minutes : minutes
      secondes = secondes < 10 ? "0" + secondes : secondes
      if (timerElement) {
        timerElement.innerText = `${hours}:${minutes}:${secondes}`
        console.log("Temps restant : " + temps);
      }
      temps = temps <= 0 ? 0 : temps - 1
    }, 1000)
  }

  let initialTimer = "00:00:00";

  if (typeof timerBeforeNextDeletionInSeconds !== "boolean") {
    let Hours = numberToDigitString(Math.floor(timerBeforeNextDeletionInSeconds / 3600));
    let Minutes = numberToDigitString(Math.floor(timerBeforeNextDeletionInSeconds / 60) % 60);
    let Seconds = numberToDigitString(Math.floor(timerBeforeNextDeletionInSeconds % 60));
    initialTimer = `${Hours}:${Minutes}:${Seconds}`;
  }



  return (
    <div className="TimerCard">
      <span className="TimerText">
        {
          (typeof timerBeforeNextDeletionInSeconds === "boolean") ?
            ((timerBeforeNextDeletionInSeconds === true) ? (messageJeuRecommence) : (messageJeuTerminé))
            :
            <span id="timer">
              {initialTimer}
            </span>
        }
      </span>
    </div>
  );
}

export default TimerCard;