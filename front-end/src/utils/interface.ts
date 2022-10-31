interface memberType {
    name: string;
    age?: number;
}

interface memberListType extends Array<memberType> {
}

interface dtoMembersListAPI {
    listMember: memberListType;
    timingBeforeNextDeletion: { hours: number, minutes: number, seconds: number } | boolean;
    beginingTime: { hours: number, minutes: number, seconds: number };
    endingTime: { hours: number, minutes: number, seconds: number };
}


export type { memberType, memberListType, dtoMembersListAPI, }

