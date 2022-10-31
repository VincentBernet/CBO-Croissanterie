import { memberListType, calculateNombreDeletionToDoType, calculateNombreDeletionTheoricType, calculateTimeBeforeNextDeletionType, memberType, dtoMembersListAPI } from "./members-list-type";
import { MockInitialTeamMembers, MockCurrentTeamMembers, MockBeginingTime, MockEndingTime, MockCurrentDate, MockCurrentDateInMinute } from "./members-list-mock";

export const getCurrentMemberListMethod = (): dtoMembersListAPI => {

  const currentListMemberValue: memberListType = updateCurrentList({
    initialList: MockInitialTeamMembers, currentList: MockCurrentTeamMembers,
    beginingTime: MockBeginingTime, endingTime: MockEndingTime, currentTime: MockCurrentDateInMinute
  });

  const currentTimeBeforeNextDeletionValue: { hours: number, minutes: number, seconds: number } | boolean
    = calculateTimeBeforeNextDeletion({
      initialList: MockInitialTeamMembers,
      beginingTime: MockBeginingTime, endingTime: MockEndingTime, currentTime: MockCurrentDateInMinute
    });

  return {
    listMember: currentListMemberValue, timingBeforeNextDeletion: currentTimeBeforeNextDeletionValue,
    beginingTime: parseMinuteToTimeFormat(MockBeginingTime), endingTime: parseMinuteToTimeFormat(MockEndingTime)
  };
}

export const getInitialMemberListMethod = (): memberListType => {
  return MockInitialTeamMembers;
}

const calculateNombreDeletionToDo = ({ initialList, currentList, beginingTime, endingTime, currentTime }: calculateNombreDeletionToDoType): number => {
  const nombreDeletionActuel = initialList.length - currentList.length;
  const timeDeletion = ((endingTime - beginingTime) / (initialList.length - 1));
  const nombreDeletionTheoric = calculateNombreDeletionTheoric({ initialList, beginingTime, currentTime, timeDeletion });
  console.log("---------------------------------------------------------")
  console.log("NombreDelationToDo = " + (nombreDeletionTheoric - nombreDeletionActuel) + " ->  nombreDeletionTheoric(" + nombreDeletionTheoric + ") - "
    + "nombreDeletionActuel(" + nombreDeletionActuel + ")");
  return nombreDeletionTheoric - nombreDeletionActuel;
}

const calculateNombreDeletionTheoric = ({ initialList, beginingTime, currentTime, timeDeletion }: calculateNombreDeletionTheoricType): number => {
  const nombreDeletionTheoric = Math.floor(((currentTime - beginingTime) / timeDeletion));
  const finalNombreDeletionTheoric = nombreDeletionTheoric > (initialList.length - 1) ? (initialList.length - 1) : nombreDeletionTheoric;
  return finalNombreDeletionTheoric;
}

const deleteRandomMember = (currentList: memberListType): memberListType => {
  const randomKeyToDelete = Math.random() * currentList.length;
  currentList.splice(randomKeyToDelete, 1);
  return currentList;
}

const updateCurrentList = ({ initialList, currentList, beginingTime, endingTime, currentTime }: calculateNombreDeletionToDoType): memberListType => {
  const nombreDeletionToDo = calculateNombreDeletionToDo({ initialList, currentList, beginingTime, endingTime, currentTime });
  let currentListUpdated = currentList;
  for (let i = 0; i < nombreDeletionToDo; i++) {
    deleteRandomMember(currentListUpdated);
  }
  return currentListUpdated;
}


const parseMinuteToTimeFormat = (timeInMinute: number): { hours: number, minutes: number, seconds: number } => {
  const hourTime = Math.floor(timeInMinute / 60);
  const minutesTime = Math.floor(timeInMinute % 60);
  const secondsTime = (timeInMinute - (hourTime * 60) - minutesTime) * 60;
  return { hours: hourTime, minutes: minutesTime, seconds: secondsTime };
}

const calculateTimeBeforeNextDeletion = ({ initialList, beginingTime, endingTime, currentTime }: calculateTimeBeforeNextDeletionType): { hours: number, minutes: number, seconds: number } | boolean => {
  const timeDeletion = ((endingTime - beginingTime) / (initialList.length - 1));
  if (currentTime > endingTime) return false;
  if (currentTime < beginingTime) return true;
  const timeBeforeNextDeletionInMinutes = (timeDeletion - (currentTime - beginingTime) % timeDeletion);
  return (parseMinuteToTimeFormat(timeBeforeNextDeletionInMinutes));
}
