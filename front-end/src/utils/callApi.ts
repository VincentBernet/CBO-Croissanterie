import { dtoMembersListAPI } from "./interface";

export const retrieveGameApiCall = async (): Promise<dtoMembersListAPI> => {
    let json: dtoMembersListAPI = { timerBeforeNextDeletion: false, memberList: [{ name: "" }], beginingTimer: { hours: 8, minutes: 0, seconds: 0 }, endingTimer: { hours: 17, minutes: 0, seconds: 0 } };
    const currentDateApiCall: Date = new Date();
    const currentDateApiCallInMinute: number = (currentDateApiCall.getHours() * 60) + currentDateApiCall.getMinutes() + (currentDateApiCall.getSeconds() / 60);
    console.log("Appel du back via la fonctione retrieveGameApiCall à l'heure (en minute) donnée : " + currentDateApiCallInMinute);
    try {
        const endpointUrl = `https://own-proxy-cors.herokuapp.com/https://croissanterie-backend.herokuapp.com/members/current-list/${currentDateApiCallInMinute}`;
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
}

export const retrieveInfoApiCall = async (): Promise<{ info: string }> => {
    let json: { info: string } = { info: "Attente de la réponse du serveur" };
    try {
        const endpointUrl = `https://own-proxy-cors.herokuapp.com/https://croissanterie-backend.herokuapp.com/members/game-info`;
        await fetch(endpointUrl).then((response) => response
            .json()
            .then((data) => ({
                data,
                status: response.status,
            }))
            .then((res) => {
                json = res.data.info;
            }));
    } catch (error) {
        console.log(`We got some error with the api call chef: ${error}`);
        json = { info: `We got some error with the api call chef: ${error}` };
    }
    return json;
};