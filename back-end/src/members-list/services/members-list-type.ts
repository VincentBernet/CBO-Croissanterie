interface memberType {
    name: string;
    age?: number;
}

interface memberListType extends Array<memberType> {
}

interface timerBeforeNextDeletion {
    timerBeforeNextDeletion: { hours: string, minutes: string, seconds: string } | boolean;
}

interface dtoMembersListAPI {
    memberList: memberListType;
    timerBeforeNextDeletion: { hours: string, minutes: string, seconds: string } | boolean;
    beginingTimer: { hours: string, minutes: string, seconds: string };
    endingTimer: { hours: string, minutes: string, seconds: string };
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