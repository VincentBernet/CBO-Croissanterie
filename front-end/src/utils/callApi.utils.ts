
import { dtoMembersListAPI } from "./interface";

export const retrieveApiCall = async (): Promise<dtoMembersListAPI> => {
    let json: dtoMembersListAPI = { timingBeforeNextDeletion: false, listMember: [{ name: "" }], beginingTime: { hours: 8, minutes: 0, seconds: 0 }, endingTime: { hours: 17, minutes: 0, seconds: 0 } };
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
        json = { timingBeforeNextDeletion: false, listMember: [{ name: "Error: Serveur is not available" }], beginingTime: { hours: 8, minutes: 0, seconds: 0 }, endingTime: { hours: 17, minutes: 0, seconds: 0 } };
    }
    return json;
};
