interface memberType {
    name: string;
    age?: number;
}

interface memberListType extends Array<memberType> { }

interface dtoMembersListAPI {
    memberList: memberListType;
    timerBeforeNextDeletion: { hours: number, minutes: number, seconds: number } | boolean;
    beginingTimer: { hours: number, minutes: number, seconds: number };
    endingTimer: { hours: number, minutes: number, seconds: number };
}

export type { memberType, memberListType, dtoMembersListAPI, }

