import React, { useState } from 'react';
import { retrieveGameApiCall } from '../utils/callApi';
import { dtoMembersListAPI } from '../utils/interface';
import { MockEmptyTeamMembers, MockTimerTillNextDeletion, MockBeginingTime, MockEndingTime } from '../utils/mock';
import MemberCard from '../components/MemberCard';
import TimerCard from '../components/TimerCard';
import loading from './../utils/image/loader.svg';
import './global.css';

const HomePage = () => {
  const currentCroissanterInfoJSON: Promise<dtoMembersListAPI> = retrieveGameApiCall();
  const [dataInformation, setDataInformation] =
    useState({
      memberList: MockEmptyTeamMembers, timerBeforeNextDeletion: MockTimerTillNextDeletion,
      beginingTimer: MockBeginingTime, endingTimer: MockEndingTime
    });
  const [dataIsLoading, setDataIsLoading] = useState(true);

  const callAgainAPI = (dataIsLoading: boolean) => {
    if (dataIsLoading !== true) {
      setDataIsLoading(true);
    }
  }

  if (dataIsLoading === true) {
    currentCroissanterInfoJSON.then((data) => {
      setDataIsLoading(false);
      setDataInformation({
        memberList: data.memberList, timerBeforeNextDeletion: data.timerBeforeNextDeletion,
        beginingTimer: data.beginingTimer, endingTimer: data.endingTimer
      });
      console.log("Reçus le nombre de secondes suivant suite à l'appel de l'API : " + data.timerBeforeNextDeletion);
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
            <TimerCard timerBeforeNextDeletionInSeconds={dataInformation.timerBeforeNextDeletion}
              beginingTimer={dataInformation.beginingTimer} endingTimer={dataInformation.endingTimer}
              dataIsLoading={dataIsLoading} setDataIsLoading={callAgainAPI} />
          </div>
          <div className="MemberCardContainer">
            {dataInformation.memberList.map((memberInfo, index) => (
              <MemberCard memberInfo={memberInfo} key={`MemberCard of ${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>Erreur 404</div>
  );
}

export default HomePage;
