
import { dtoMembersListAPI } from "./interface";

export const retrieveApiCall = async (): Promise<dtoMembersListAPI> => {
    let json: dtoMembersListAPI = { timerBeforeNextDeletion: false, memberList: [{ name: "" }], beginingTimer: { hours: 8, minutes: 0, seconds: 0 }, endingTimer: { hours: 17, minutes: 0, seconds: 0 } };
    const currentDateApiCall: Date = new Date();
    const currentDateApiCallInMinute: number = (currentDateApiCall.getHours() * 60) + currentDateApiCall.getMinutes() + (currentDateApiCall.getSeconds() / 60);
    console.log("currentDateApiCallInMinute = " + currentDateApiCallInMinute);
    try {
        const endpointUrl = `https://own-proxy-cors.herokuapp.com/https://croissanterie-backend.herokuapp.com/members/${currentDateApiCallInMinute}`;
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
        json = { timerBeforeNextDeletion: false, memberList: [{ name: "Error: Serveur is not available" }], beginingTimer: { hours: 8, minutes: 0, seconds: 0 }, endingTimer: { hours: 17, minutes: 0, seconds: 0 } };
    }
    return json;
};
