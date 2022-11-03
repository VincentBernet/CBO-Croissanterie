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

export type { memberType, memberListType, dtoMembersListAPI, timeFormat }

