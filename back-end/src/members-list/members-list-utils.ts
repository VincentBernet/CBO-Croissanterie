interface calculateNombreDeletionToDoType {
    initialList: string[],
    currentList: string[],
    heureDebut: number,
    heureFin: number,
    heureActuelle: number,
  }
  
interface calculateTimeBeforeNextDeletionType {
    initialList: string[],
    heureDebut: number,
    heureFin: number,
    heureActuelle: number,
}
  
interface calculateNombreDeletionTheoricType {
    initialList: string[],
    timeDeletion: number,
    heureDebut: number,
    heureActuelle: number,
}
  
  const MockInitialTeamMembers: string[] =
  ["Vincent", "Kevin", "Jean", "Jean-Christophe", "Hakima", "Aya", "Virgil", "Stéphane", "Wendy", "Oum", "Jeremy", "Claudia", "Cherif"];
  const MockCurrentTeamMembers: string[] =
  ["Vincent", "Kevin", "Jean", "Jean-Christophe", "Hakima", "Aya", "Virgil", "Stéphane", "Wendy", "Oum", "Jeremy", "Claudia", "Cherif"];
  const MockHeureDebut: number = 600;
  const MockHeureFin: number = 1020;
   
  export const getCurrentMemberListMethod = (): [currentListMember: string[], currentTimeBeforeNextDeletion: number | boolean] => {
      const currentDate = new Date;
      const currentDateInMinute: number = (currentDate.getHours() * 60) + currentDate.getMinutes() + (currentDate.getSeconds() / 60);
  
      const currentListMember = updateCurrentList({initialList: MockInitialTeamMembers, currentList: MockCurrentTeamMembers, 
        heureDebut: MockHeureDebut, heureFin: MockHeureFin, heureActuelle: currentDateInMinute});
  
      const currentTimeBeforeNextDeletion = calculateTimeBeforeNextDeletion({initialList: MockInitialTeamMembers, 
        heureDebut: MockHeureDebut, heureFin: MockHeureFin, heureActuelle: currentDateInMinute});
  
      return [currentListMember, currentTimeBeforeNextDeletion];
  }
  
  export const getInitialMemberListMethod = (): string[] => {
    console.log("Liste Actualisée : " + MockInitialTeamMembers);
    return MockInitialTeamMembers;
  }
  
  const calculateNombreDeletionToDo = ({initialList, currentList, heureDebut, heureFin, heureActuelle}: calculateNombreDeletionToDoType): number => {
    const nombreDeletionActuel = initialList.length - currentList.length;
    const timeDeletion = ((heureFin - heureDebut) / (initialList.length -1));
    const nombreDeletionTheoric = calculateNombreDeletionTheoric({initialList, heureDebut, heureActuelle, timeDeletion});
    console.log("---------------------------------------------------------")
    console.log("NombreDelationToDo = " + (nombreDeletionTheoric - nombreDeletionActuel) + " ->  nombreDeletionTheoric(" + nombreDeletionTheoric + ") - " 
    + "nombreDeletionActuel(" + nombreDeletionActuel + ")");
    return nombreDeletionTheoric - nombreDeletionActuel;
  }
  
  const calculateNombreDeletionTheoric = ({initialList, heureDebut, heureActuelle, timeDeletion}: calculateNombreDeletionTheoricType): number => {
    const nombreDeletionTheoric = Math.floor(((heureActuelle - heureDebut) / timeDeletion));
    const finalNombreDeletionTheoric = nombreDeletionTheoric > (initialList.length - 1) ? (initialList.length - 1) : nombreDeletionTheoric;
    return finalNombreDeletionTheoric; 
  }
  
  const deleteRandomMember = (currentList: string[]): string[] => {
    const randomKeyToDelete = Math.random() * currentList.length;
    currentList.splice(randomKeyToDelete,1);
    return currentList;
  }

  const updateCurrentList = ({initialList, currentList, heureDebut, heureFin, heureActuelle}: calculateNombreDeletionToDoType): string[] => {
    const nombreDeletionToDo = calculateNombreDeletionToDo({initialList, currentList, heureDebut, heureFin, heureActuelle});
    console.log("Liste Précédente : " + currentList);
    let currentListUpdated = currentList;
    for (let i=0;i<nombreDeletionToDo;i++) {
        deleteRandomMember(currentListUpdated);
    }
    console.log("Liste Actualisée : " + currentListUpdated);
    return currentListUpdated;
  }
  
  const calculateTimeBeforeNextDeletion = ({initialList, heureDebut, heureFin, heureActuelle}: calculateTimeBeforeNextDeletionType): number | boolean => {
    const timeDeletion = ((heureFin - heureDebut) / (initialList.length -1));
    if (heureActuelle > heureFin)
    {
        return false;
    }
    return (timeDeletion - (heureActuelle - heureDebut) % timeDeletion);
  }
