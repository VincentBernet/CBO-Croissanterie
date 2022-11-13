import React, { useState } from 'react';
import { retrieveInfoApiCall } from '../utils/callApi';
import loading from './../utils/image/loader.svg';

const InfoPage = () => {
    const currentCroissanterInfoJSON: Promise<{ info: string }> = retrieveInfoApiCall();
    const [dataInformation, setDataInformation] =
        useState("");
    const [dataIsLoading, setDataIsLoading] = useState(true);

    if (dataIsLoading === true) {
        currentCroissanterInfoJSON.then((data) => {
            setDataIsLoading(false);
            setDataInformation(data.info);
            console.log("Information sur le jeu : " + data.info);
        });
    }
    if (dataIsLoading) {
        return (
            <div className="LoaderContainer"> <img src={loading} /> </div>
        );
    }
    if (dataInformation) {
        return (<>{dataInformation}</>);
    }
    return (
        <div>Erreur 404</div>
    );
}

export default InfoPage;