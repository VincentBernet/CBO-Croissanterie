interface memberType {
    name: string;
    age?: number;
}

interface memberListType extends Array<memberType> {
}

interface dtoMembersListAPI {
    listMember: memberListType;
    timingBeforeNextDeletion: { hours: number, minutes: number, seconds: number } | boolean;
    beginingTime: number;
    endingTime: number;
}

interface calculateNombreDeletionToDoType {
    initialList: memberListType,
    currentList: memberListType,
    currentTime: number,
    beginingTime: number,
    endingTime: number,
}

interface calculateTimeBeforeNextDeletionType {
    initialList: memberListType,
    beginingTime: number,
    endingTime: number,
    currentTime: number,
}

interface calculateNombreDeletionTheoricType {
    initialList: memberListType,
    timeDeletion: number,
    beginingTime: number,
    currentTime: number,
}




export { memberType, memberListType, dtoMembersListAPI, calculateNombreDeletionToDoType, calculateTimeBeforeNextDeletionType, calculateNombreDeletionTheoricType }