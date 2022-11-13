import React, { useState } from 'react';
import { retrieveInfoApiCall } from '../utils/callApi';
import { dtoGameInfoApi } from '../utils/interface';
import loading from './../utils/image/loader.svg';
import './global.css';

const InfoPage = () => {
    const currentCroissanterInfoJSON: Promise<dtoGameInfoApi> = retrieveInfoApiCall();
    const [dataInformation, setDataInformation] =
        useState({ memberList: [{ name: "Vincent" }], beginingTime: '', endingTime: '' });
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
            <div className="GlobalContainer">
                <div className="MainCardContainer">
                    <div className="TimerCardContainer">
                        <div className="TimerCard">
                            Information sur le jeu
                        </div>
                    </div>
                    <div className="MemberCardContainer">
                        <div className="GenericCard">
                            Heure de début : {dataInformation.beginingTime}
                        </div>
                        <div className="GenericCard">
                            Heure de fin : {dataInformation.endingTime}
                        </div>
                        <div className="GenericCard">
                            Liste des participants : <br />
                            {dataInformation.memberList.map(member => member.name + ", ")}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div>Erreur 404</div>
    );
}

export default InfoPage;