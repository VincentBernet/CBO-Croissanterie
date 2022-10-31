import { memberListType, calculateNombreDeletionToDoType, calculateNombreDeletionTheoricType, calculateTimeBeforeNextDeletionType, memberType } from "./members-list-type";
import { MockInitialTeamMembers, MockCurrentTeamMembers, MockHeureDebut, MockHeureFin, MockCurrentDate, } from "./members-list-mock";

export const getCurrentMemberListMethod = (): { currentListMember: memberListType, currentTimeBeforeNextDeletion: number | boolean } => {
  const currentDateInMinute: number = (MockCurrentDate.getHours() * 60) + MockCurrentDate.getMinutes() + (MockCurrentDate.getSeconds() / 60);

  const currentListMemberValue: memberListType = updateCurrentList({
    initialList: MockInitialTeamMembers, currentList: MockCurrentTeamMembers,
    heureDebut: MockHeureDebut, heureFin: MockHeureFin, heureActuelle: currentDateInMinute
  });

  const currentTimeBeforeNextDeletionValue: number | boolean = calculateTimeBeforeNextDeletion({
    initialList: MockInitialTeamMembers,
    heureDebut: MockHeureDebut, heureFin: MockHeureFin, heureActuelle: currentDateInMinute
  });

  return { currentListMember: currentListMemberValue, currentTimeBeforeNextDeletion: currentTimeBeforeNextDeletionValue };
}

export const getInitialMemberListMethod = (): memberListType => {
  return MockInitialTeamMembers;
}

const calculateNombreDeletionToDo = ({ initialList, currentList, heureDebut, heureFin, heureActuelle }: calculateNombreDeletionToDoType): number => {
  const nombreDeletionActuel = initialList.length - currentList.length;
  const timeDeletion = ((heureFin - heureDebut) / (initialList.length - 1));
  const nombreDeletionTheoric = calculateNombreDeletionTheoric({ initialList, heureDebut, heureActuelle, timeDeletion });
  console.log("---------------------------------------------------------")
  console.log("NombreDelationToDo = " + (nombreDeletionTheoric - nombreDeletionActuel) + " ->  nombreDeletionTheoric(" + nombreDeletionTheoric + ") - "
    + "nombreDeletionActuel(" + nombreDeletionActuel + ")");
  return nombreDeletionTheoric - nombreDeletionActuel;
}

const calculateNombreDeletionTheoric = ({ initialList, heureDebut, heureActuelle, timeDeletion }: calculateNombreDeletionTheoricType): number => {
  const nombreDeletionTheoric = Math.floor(((heureActuelle - heureDebut) / timeDeletion));
  const finalNombreDeletionTheoric = nombreDeletionTheoric > (initialList.length - 1) ? (initialList.length - 1) : nombreDeletionTheoric;
  return finalNombreDeletionTheoric;
}

const deleteRandomMember = (currentList: memberListType): memberListType => {
  const randomKeyToDelete = Math.random() * currentList.length;
  currentList.splice(randomKeyToDelete, 1);
  return currentList;
}

const updateCurrentList = ({ initialList, currentList, heureDebut, heureFin, heureActuelle }: calculateNombreDeletionToDoType): memberListType => {
  const nombreDeletionToDo = calculateNombreDeletionToDo({ initialList, currentList, heureDebut, heureFin, heureActuelle });
  let currentListUpdated = currentList;
  for (let i = 0; i < nombreDeletionToDo; i++) {
    deleteRandomMember(currentListUpdated);
  }
  return currentListUpdated;
}

const calculateTimeBeforeNextDeletion = ({ initialList, heureDebut, heureFin, heureActuelle }: calculateTimeBeforeNextDeletionType): number | boolean => {
  const timeDeletion = ((heureFin - heureDebut) / (initialList.length - 1));
  if (heureActuelle > heureFin) return false;
  if (heureActuelle < heureDebut) return true;
  return (timeDeletion - (heureActuelle - heureDebut) % timeDeletion);
}
