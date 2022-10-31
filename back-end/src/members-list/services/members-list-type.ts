interface memberType {
    name: string;
    age?: number;
}

interface memberListType extends Array<memberType> {
}

interface dtoMembersListAPI {
    currentTimeBeforeNextDeletion: string;
    currentListMember: memberListType;
}

interface calculateNombreDeletionToDoType {
    initialList: memberListType,
    currentList: memberListType,
    heureDebut: number,
    heureFin: number,
    heureActuelle: number,
}

interface calculateTimeBeforeNextDeletionType {
    initialList: memberListType,
    heureDebut: number,
    heureFin: number,
    heureActuelle: number,
}

interface calculateNombreDeletionTheoricType {
    initialList: memberListType,
    timeDeletion: number,
    heureDebut: number,
    heureActuelle: number,
}



export { memberType, memberListType, dtoMembersListAPI, calculateNombreDeletionToDoType, calculateTimeBeforeNextDeletionType, calculateNombreDeletionTheoricType }