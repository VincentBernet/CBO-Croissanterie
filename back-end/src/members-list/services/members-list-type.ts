interface timeFormat {
    hours: string, minutes: string, seconds: string
}

interface memberType {
    name: string;
    age?: number;
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
    currentCallTime: number,
}

interface calculateNombreDeletionTheoricType {
    initialList: memberListType,
    timeDeletion: number,
    beginingTimer: number,
    currentTimer: number,
}

interface dtoGameInfoApi {
    memberList: memberListType,
    beginingTime: string,
    endingTime: string,
    timeBetweenEachDeletion: string,
}

export { timeFormat, memberType, memberListType, dtoMembersListAPI, dtoGameInfoApi, calculateNombreDeletionToDoType, calculateTimerBeforeNextDeletionType, calculateNombreDeletionTheoricType }