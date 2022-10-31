import { calculateNombreDeletionTheoricType } from "./members-list-type";
import { MockInitialTeamMembers, MockCurrentTeamMembers, MockBeginingTime, MockEndingTime, MockCurrentDateInMinute, } from "./members-list-mock";

export const getInfo = (): string => {
    const nombreDeletionActuel = MockInitialTeamMembers.length - MockCurrentTeamMembers.length;
    const timeDeletion = ((MockEndingTime - MockBeginingTime) / (MockInitialTeamMembers.length - 1));
    const nombreDeletionTheoric = calculateNombreDeletionTheoric({ initialList: MockInitialTeamMembers, beginingTime: MockBeginingTime, currentTime: MockCurrentDateInMinute, timeDeletion: timeDeletion });
    return ("NombreDelationToDo = " + (nombreDeletionTheoric - nombreDeletionActuel) + " ->  nombreDeletionTheoric(" + nombreDeletionTheoric + ") - "
        + "nombreDeletionActuel(" + nombreDeletionActuel + ")");
}


const calculateNombreDeletionTheoric = ({ initialList, beginingTime, currentTime, timeDeletion }: calculateNombreDeletionTheoricType): number => {
    const nombreDeletionTheoric = Math.floor(((currentTime - beginingTime) / timeDeletion));
    const finalNombreDeletionTheoric = nombreDeletionTheoric > (initialList.length - 1) ? (initialList.length - 1) : nombreDeletionTheoric;
    return finalNombreDeletionTheoric;
}