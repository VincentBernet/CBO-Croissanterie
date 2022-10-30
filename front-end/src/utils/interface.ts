// Future interface for the productJson returned by the API
export interface memberType {
    member_name: string;
    member_age?: number;
}

// Future interface for the productJson returned by the API
export interface memberListType {
    members: memberType[];
}

export interface dtoMembersListAPI {
    currentTimeBeforeNextDeletion: string;
    currentListMember: memberListType;
}