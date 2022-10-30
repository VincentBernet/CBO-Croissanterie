
import { dtoMembersListAPI } from "./interface";

export const retrieveApiCall = async (): Promise<dtoMembersListAPI> => {
    let json: dtoMembersListAPI = { currentTimeBeforeNextDeletion: "", currentListMember: { members: [] } };
    try {
        const endpointUrl = `https://croissanterie-backend.herokuapp.com/members/current-list`;
        await fetch(endpointUrl).then((response) => response
            .json()
            .then((data) => ({
                data,
                status: response.status,
            }))
            .then((res) => {
                json = res.data;
            }));
    } catch (error) {
        console.log(`We got some error with the api call chef: ${error}`);
        console.error(error);
    }
    return json;
};
