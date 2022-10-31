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

export type { memberType, memberListType, dtoMembersListAPI, }

