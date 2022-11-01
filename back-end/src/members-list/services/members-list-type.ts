interface memberType {
    name: string;
    age?: number;
}

interface memberListType extends Array<memberType> {
}

interface dtoMembersListAPI {
    memberList: memberListType;
    timerBeforeNextDeletion: { hours: number, minutes: number, seconds: number } | boolean;
    beginingTimer: { hours: number, minutes: number, seconds: number };
    endingTimer: { hours: number, minutes: number, seconds: number };
}

interface calculateNombreDeletionToDoType {
    initialList: memberListType,
    currentList: memberListType,
    currentTimer: number,
    beginingTimer: number,
    endingTimer: number,
}

interface calculateTimerBeforeNextDeletionType {
    initialList: memberListType,
    beginingTimer: number,
    endingTimer: number,
    currentTime: number,
}

interface calculateNombreDeletionTheoricType {
    initialList: memberListType,
    timeDeletion: number,
    beginingTimer: number,
    currentTimer: number,
}




export { memberType, memberListType, dtoMembersListAPI, calculateNombreDeletionToDoType, calculateTimerBeforeNextDeletionType, calculateNombreDeletionTheoricType }