import { calculateNombreDeletionTheoricType } from "./members-list-type";
import { MockInitialTeamMembers, MockCurrentTeamMembers, MockHeureDebut, MockHeureFin, MockCurrentDate, } from "./members-list-mock";

export const getInfo = () : string => {
    const currentDateInMinute: number = (MockCurrentDate.getHours() * 60) + MockCurrentDate.getMinutes() + (MockCurrentDate.getSeconds() / 60);

    const nombreDeletionActuel = MockInitialTeamMembers.length - MockCurrentTeamMembers.length;
    const timeDeletion = ((MockHeureFin - MockHeureDebut) / (MockInitialTeamMembers.length -1));
    const nombreDeletionTheoric = calculateNombreDeletionTheoric({initialList: MockInitialTeamMembers, heureDebut: MockHeureDebut, heureActuelle: currentDateInMinute, timeDeletion: timeDeletion});
    return ("NombreDelationToDo = " + (nombreDeletionTheoric - nombreDeletionActuel) + " ->  nombreDeletionTheoric(" + nombreDeletionTheoric + ") - " 
    + "nombreDeletionActuel(" + nombreDeletionActuel + ")");
} 

  
const calculateNombreDeletionTheoric = ({initialList, heureDebut, heureActuelle, timeDeletion}: calculateNombreDeletionTheoricType): number => {
    const nombreDeletionTheoric = Math.floor(((heureActuelle - heureDebut) / timeDeletion));
    const finalNombreDeletionTheoric = nombreDeletionTheoric > (initialList.length - 1) ? (initialList.length - 1) : nombreDeletionTheoric;
    return finalNombreDeletionTheoric; 
  }