import React from 'react';

interface TimerCardProp {
  timer: string | boolean;
}

const TimerCard = ({ timer }: TimerCardProp) => {
  return (
    <div className="TimerCard">
      {' '}
      <span className="TimerText">{timer ? timer : "Le jeu est terminé : début demain à 8h00"}</span>
      {' '}
    </div>
  );
}

export default TimerCard;
