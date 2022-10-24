interface TimerCardProp {
    timer: string;
}

function TimerCard({ timer } : TimerCardProp) {
  return (
    <div className="TimerCard">
      {' '}
      <span className="TimerText">{timer}</span>
      {' '}
    </div>
  );
}

export default TimerCard;
