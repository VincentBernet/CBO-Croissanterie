import React, { useState } from 'react';
import { retrieveApiCall } from '../utils/callApi.utils';
import { dtoMembersListAPI } from '../utils/interface';
import { MockEmptyTeamMembers, MockTimerTillNextDeletion, MockBeginingTime, MockEndingTime } from '../utils/mock';
import './GlobalContainer.css';
import MemberCard from './MemberCard';
import TimerCard from './TimerCard';

const GlobalContainer = () => {
  const currentCroissanterInfoJSON: Promise<dtoMembersListAPI> = retrieveApiCall();
  const [dataInformation, setDataInformation] =
    useState({
      memberList: MockEmptyTeamMembers, timerBeforeNextDeletion: MockTimerTillNextDeletion,
      beginingTimer: MockBeginingTime, endingTimer: MockEndingTime
    });
  const [dataError, setDataError] = useState(false);
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
    return (<> Loading Time </>
      /*<div className="MainCardContainer">
        <TimerCard timer={""} />
        <div className="MemberCardContainer">
          {MockEmptyTeamMembers.map((memberInfo, index) => (<MemberCard memberInfo={memberInfo} key={`Squeleton number ${index}`} />))}
        </div>
      </div>*/
    );
  }

  if (dataInformation) {
    return (
      <div className="MainCardContainer">
        <TimerCard timerBeforeNextDeletion={dataInformation.timerBeforeNextDeletion} beginingTimer={dataInformation.beginingTimer} endingTimer={dataInformation.endingTimer} />
        <div className="MemberCardContainer">
          {dataInformation.memberList.map((memberInfo, index) => (<MemberCard memberInfo={memberInfo} key={`MemberCard of ${index}`} />))}
        </div>
      </div>
    );
  }

  return (
    <div>L&apos;erreur est la suivante : {dataError}</div>
  );
}

export default GlobalContainer;
