import React, { useState } from 'react';
import { retrieveApiCall } from '../utils/callApi.utils';
import { dtoMembersListAPI } from '../utils/interface';
import { MockEmptyTeamMembers, MockTimerTillNextDeletion, MockBeginingTime, MockEndingTime } from '../utils/mock';
import MemberCard from './MemberCard';
import TimerCard from './TimerCard';
import loading from './../utils/image/loader.svg';
import './GlobalContainer.css';

const GlobalContainer = () => {
  const currentCroissanterInfoJSON: Promise<dtoMembersListAPI> = retrieveApiCall();
  const [dataInformation, setDataInformation] =
    useState({
      memberList: MockEmptyTeamMembers, timerBeforeNextDeletion: MockTimerTillNextDeletion,
      beginingTimer: MockBeginingTime, endingTimer: MockEndingTime
    });
  const [dataIsLoading, setDataIsLoading] = useState(true);

  if (dataIsLoading === true) {
    currentCroissanterInfoJSON.then((data) => {
      setDataIsLoading(false);
      setDataInformation({
        memberList: data.memberList, timerBeforeNextDeletion: data.timerBeforeNextDeletion,
        beginingTimer: data.beginingTimer, endingTimer: data.endingTimer
      });
      console.log("Appel api : " + data.timerBeforeNextDeletion);
    });
  }

  if (dataIsLoading) {
    return (
      <div className="LoaderContainer"> <img src={loading} /> </div>
    );
  }

  if (dataInformation) {
    return (
      <div className="MainCardContainer">
        <TimerCard timerBeforeNextDeletion={dataInformation.timerBeforeNextDeletion}
          beginingTimer={dataInformation.beginingTimer} endingTimer={dataInformation.endingTimer} />
        <div className="MemberCardContainer">
          {dataInformation.memberList.map((memberInfo, index) => (
            <MemberCard memberInfo={memberInfo} key={`MemberCard of ${index}`} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>Erreur 404</div>
  );
}

export default GlobalContainer;
