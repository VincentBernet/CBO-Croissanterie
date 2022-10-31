
import { dtoMembersListAPI } from "./interface";

export const retrieveApiCall = async (): Promise<dtoMembersListAPI> => {
    let json: dtoMembersListAPI = { currentTimeBeforeNextDeletion: "", currentListMember: [{ name: "" }] };
    try {
        const endpointUrl = `https://own-proxy-cors.herokuapp.com/https://croissanterie-backend.herokuapp.com/members/current-list`;
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
        json = { currentTimeBeforeNextDeletion: "Error", currentListMember: [{ name: "Error: Serveur is not available" }] };
    }
    return json;
};
