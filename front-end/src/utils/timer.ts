const numberToDigitString = (number: number,): string => {
    if (number < 10) { return "0" + number; }
    return number.toString();
}

export const getInitialTimer = (timerBeforeNextDeletionInSeconds: number): string => {
    let Hours = numberToDigitString(Math.floor(timerBeforeNextDeletionInSeconds / 3600));
    let Minutes = numberToDigitString(Math.floor(timerBeforeNextDeletionInSeconds / 60) % 60);
    let Seconds = numberToDigitString(Math.floor(timerBeforeNextDeletionInSeconds % 60));
    return `${Hours}:${Minutes}:${Seconds}`;
}