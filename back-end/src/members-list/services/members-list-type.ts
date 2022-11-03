interface memberType {
    name: string;
    age?: number;
}

interface timeFormat {
    hours: string, minutes: string, seconds: string
}

interface memberListType extends Array<memberType> { }

interface dtoMembersListAPI {
    memberList: memberListType;
    timerBeforeNextDeletion: number | boolean;
    beginingTimer: timeFormat;
    endingTimer: timeFormat;
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