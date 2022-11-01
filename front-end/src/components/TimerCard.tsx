import React from 'react';

interface TimerCardProp {
  timerBeforeNextDeletion: { hours: number, minutes: number, seconds: number } | boolean;
  beginingTimer: { hours: number, minutes: number, seconds: number };
  endingTimer: { hours: number, minutes: number, seconds: number };
}

const TimerCard = ({ timerBeforeNextDeletion, beginingTimer, endingTimer }: TimerCardProp) => {
  const messageJeuTerminé = "Le jeu est finis depuis " + endingTimer.hours + ":" + endingTimer.minutes +
    " et recommenceras demain à " + beginingTimer.hours + ":" + beginingTimer.minutes;
  const messageJeuRecommence = "Le jeu commence à " + beginingTimer.hours + ":" + beginingTimer.minutes;
  return (
    <div className="TimerCard">
      <span className="TimerText">{(typeof timerBeforeNextDeletion === "boolean") ?
        ((timerBeforeNextDeletion === true) ? (messageJeuRecommence) : (messageJeuTerminé)) :
        (timerBeforeNextDeletion.hours + ":" + timerBeforeNextDeletion.minutes + ":" + timerBeforeNextDeletion.seconds)}
      </span>
    </div>
  );
}

export default TimerCard;
