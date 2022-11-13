interface memberType {
    name: string;
    age?: number;
}

interface timeFormat {
    hours: number;
    minutes: number;
    seconds: number;
}

interface memberListType extends Array<memberType> { }

interface dtoMembersListAPI {
    memberList: memberListType;
    timerBeforeNextDeletion: number | boolean;
    beginingTimer: timeFormat;
    endingTimer: timeFormat;
}

interface dtoGameInfoApi {
    memberList: memberListType,
    beginingTime: string,
    endingTime: string,
}

export type { memberType, memberListType, dtoMembersListAPI, dtoGameInfoApi, timeFormat }

