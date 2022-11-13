import React, { useState } from 'react';
import { retrieveInfoApiCall } from '../utils/callApi';
import { dtoGameInfoApi } from '../utils/interface';
import loading from './../utils/image/loader.svg';

const InfoPage = () => {
    const currentCroissanterInfoJSON: Promise<dtoGameInfoApi> = retrieveInfoApiCall();
    const [dataInformation, setDataInformation] =
        useState({ memberList: {}, beginingTime: '', endingTime: '' });
    const [dataIsLoading, setDataIsLoading] = useState(true);

    if (dataIsLoading === true) {
        currentCroissanterInfoJSON.then((data) => {
            setDataIsLoading(false);
            setDataInformation({ memberList: data.memberList, beginingTime: data.beginingTime, endingTime: data.endingTime });
            console.log("Information sur le jeu : " + data);
        });
    }
    if (dataIsLoading) {
        return (
            <div className="LoaderContainer"> <img src={loading} /> </div>
        );
    }
    if (dataInformation) {
        return (
            <div>
                <h1>Information sur le jeu</h1>
                <p>Heure de début : {dataInformation.beginingTime}</p>
                <p>Heure de fin : {dataInformation.endingTime}</p>
                <p>Liste des participants : {dataInformation.memberList}</p>
            </div>
        );
    }
    return (
        <div>Erreur 404</div>
    );
}

export default InfoPage;