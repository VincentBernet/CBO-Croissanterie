import React, { useState } from 'react';
import { retrieveApiCall } from '../utils/callApi.utils';
import { dtoMembersListAPI } from '../utils/interface';
import { MockEmptyTeamMembers, MockTimerTillNextDeletion } from '../utils/mock';
import './GlobalContainer.css';
import MemberCard from './MemberCard';
import TimerCard from './TimerCard';

const GlobalContainer = () => {
  const currentCroissanterInfoJSON: Promise<dtoMembersListAPI> = retrieveApiCall();
  const [dataInformation, setDataInformation] = useState({ memberList: MockEmptyTeamMembers, timerTillNextDeletion: MockTimerTillNextDeletion });
  const [dataError, setDataError] = useState(false);
  const [dataIsLoading, setDataIsLoading] = useState(true);

  if (dataIsLoading === true) {
    currentCroissanterInfoJSON.then((data) => {
      setDataIsLoading(false);
      console.log(data.currentListMember);
      setDataInformation({ memberList: data.currentListMember, timerTillNextDeletion: data.currentTimeBeforeNextDeletion });
      console.log(dataInformation.memberList);
    });
  }


  if (dataIsLoading) {
    return (<></>
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
        haa
        {dataInformation.memberList[0].name}
        <TimerCard timer={dataInformation.timerTillNextDeletion} />
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
