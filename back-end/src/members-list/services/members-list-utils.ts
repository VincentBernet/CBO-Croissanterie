import { memberListType, calculateNombreDeletionToDoType, calculateNombreDeletionTheoricType, calculateTimerBeforeNextDeletionType, memberType, dtoMembersListAPI, timeFormat } from "./members-list-type";
import { MockInitialTeamMembers, MockCurrentTeamMembers, MockBeginingTimer, MockEndingTimer } from "./members-list-mock";

export const getCurrentMemberListMethod = (apiCallDate: number): dtoMembersListAPI => {

  const currentMemberListValue: memberListType = updateCurrentList({
    initialList: MockInitialTeamMembers, currentList: MockCurrentTeamMembers,
    beginingTimer: MockBeginingTimer, endingTimer: MockEndingTimer, currentTimer: apiCallDate
  });

  const currentTimeBeforeNextDeletionValue: number | boolean
    = calculateTimeBeforeNextDeletion({
      initialList: MockInitialTeamMembers,
      beginingTimer: MockBeginingTimer, endingTimer: MockEndingTimer, currentCallTime: apiCallDate
    });

  return {
    memberList: currentMemberListValue, timerBeforeNextDeletion: currentTimeBeforeNextDeletionValue,
    beginingTimer: parseMinuteToTimeFormat(MockBeginingTimer), endingTimer: parseMinuteToTimeFormat(MockEndingTimer)
  };
}

const calculateNombreDeletionToDo = ({ initialList, currentList, beginingTimer, endingTimer, currentTimer }: calculateNombreDeletionToDoType): number => {
  const nombreDeletionActuel = initialList.length - currentList.length;
  const timeDeletion = ((endingTimer - beginingTimer) / (initialList.length - 1));
  const nombreDeletionTheoric = calculateNombreDeletionTheoric({ initialList, beginingTimer, currentTimer, timeDeletion });
  console.log("---------------------------------------------------------")
  console.log("NombreDelationToDo = " + (nombreDeletionTheoric - nombreDeletionActuel) + " ->  nombreDeletionTheoric(" + nombreDeletionTheoric + ") - "
    + "nombreDeletionActuel(" + nombreDeletionActuel + ")");
  return nombreDeletionTheoric - nombreDeletionActuel;
}

const calculateNombreDeletionTheoric = ({ initialList, beginingTimer, currentTimer, timeDeletion }: calculateNombreDeletionTheoricType): number => {
  const nombreDeletionTheoric = Math.floor(((currentTimer - beginingTimer) / timeDeletion));
  const finalNombreDeletionTheoric = nombreDeletionTheoric > (initialList.length - 1) ? (initialList.length - 1) : nombreDeletionTheoric;
  return finalNombreDeletionTheoric;
}

const deleteRandomMember = (currentList: memberListType): memberListType => {
  const randomKeyToDelete = Math.random() * currentList.length;
  currentList.splice(randomKeyToDelete, 1);
  return currentList;
}

const updateCurrentList = ({ initialList, currentList, beginingTimer, endingTimer, currentTimer }: calculateNombreDeletionToDoType): memberListType => {
  const nombreDeletionToDo = calculateNombreDeletionToDo({ initialList, currentList, beginingTimer, endingTimer, currentTimer });
  let currentListUpdated = currentList;
  for (let i = 0; i < nombreDeletionToDo; i++) {
    deleteRandomMember(currentListUpdated);
  }
  return currentListUpdated;
}


const numberToDigitString = (number: number,): string => {
  if (number < 10) { return "0" + number; }
  return number.toString();
}

const parseMinuteToTimeFormat = (timeInMinute: number): timeFormat => {
  const hourTime = Math.floor(timeInMinute / 60);
  const minutesTime = Math.floor(timeInMinute % 60);
  const secondsTime = Math.floor((timeInMinute - (hourTime * 60) - minutesTime) * 60);

  return { hours: numberToDigitString(hourTime), minutes: numberToDigitString(minutesTime), seconds: numberToDigitString(secondsTime) };
}

const calculateTimeBeforeNextDeletion = ({ initialList, beginingTimer, endingTimer, currentCallTime }: calculateTimerBeforeNextDeletionType): number | boolean => {
  const timeDeletion = ((endingTimer - beginingTimer) / (initialList.length - 1));
  if (currentCallTime > endingTimer) return false;
  if (currentCallTime < beginingTimer) return true;
  const timeBeforeNextDeletionInMinutes = (timeDeletion - (currentCallTime - beginingTimer) % timeDeletion);
  return (Math.floor(timeBeforeNextDeletionInMinutes * 60));
}

export const getInitialMemberListMethod = (): memberListType => {
  return MockInitialTeamMembers;
}

export const getBeginingTimer = (): string => {
  return parseMinuteToTimeFormat(MockBeginingTimer).hours + ":" + parseMinuteToTimeFormat(MockBeginingTimer).minutes + ":" + parseMinuteToTimeFormat(MockBeginingTimer).seconds;
}

export const getEndingTimer = (): string => {
  return parseMinuteToTimeFormat(MockEndingTimer).hours + ":" + parseMinuteToTimeFormat(MockEndingTimer).minutes + ":" + parseMinuteToTimeFormat(MockEndingTimer).seconds;
}