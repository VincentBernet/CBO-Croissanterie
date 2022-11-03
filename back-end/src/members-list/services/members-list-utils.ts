import { memberListType, calculateNombreDeletionToDoType, calculateNombreDeletionTheoricType, calculateTimerBeforeNextDeletionType, memberType, dtoMembersListAPI } from "./members-list-type";
import { MockInitialTeamMembers, MockCurrentTeamMembers, MockBeginingTimer, MockEndingTimer, MockCurrentDateInMinute } from "./members-list-mock";

export const getCurrentMemberListMethod = (): dtoMembersListAPI => {

  const currentMemberListValue: memberListType = updateCurrentList({
    initialList: MockInitialTeamMembers, currentList: MockCurrentTeamMembers,
    beginingTimer: MockBeginingTimer, endingTimer: MockEndingTimer, currentTimer: MockCurrentDateInMinute
  });

  const currentTimeBeforeNextDeletionValue: number | boolean
    = calculateTimeBeforeNextDeletion({
      initialList: MockInitialTeamMembers,
      beginingTimer: MockBeginingTimer, endingTimer: MockEndingTimer, currentTime: MockCurrentDateInMinute
    });

  return {
    memberList: currentMemberListValue, timerBeforeNextDeletion: currentTimeBeforeNextDeletionValue,
    beginingTimer: parseMinuteToTimeFormat(MockBeginingTimer), endingTimer: parseMinuteToTimeFormat(MockEndingTimer)
  };
}

export const getInitialMemberListMethod = (): memberListType => {
  return MockInitialTeamMembers;
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

const calculateTimeBeforeNextDeletion = ({ initialList, beginingTimer, endingTimer, currentTime }: calculateTimerBeforeNextDeletionType): number | boolean => {
  const timeDeletion = ((endingTimer - beginingTimer) / (initialList.length - 1));
  if (currentTime > endingTimer) return false;
  if (currentTime < beginingTimer) return true;
  const timeBeforeNextDeletionInMinutes = (timeDeletion - (currentTime - beginingTimer) % timeDeletion);
  return (Math.floor(timeBeforeNextDeletionInMinutes * 60));
}
