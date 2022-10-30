import React, { useState } from 'react';
import { retrieveApiCall } from '../utils/callApi.utils';
import { memberListType } from '../utils/interface';
import './GlobalContainer.css';
import MemberCard from './MemberCard';
import TimerCard from './TimerCard';


const MockTeamMembers: memberListType = [{ name: 'Vincent', age: 23 }, { name: 'Kevin' }, { name: 'Jean' }, { name: 'Jean-Christophe' }, { name: 'Hakima' }, { name: 'Aya' }, { name: 'Virgil' }, { name: 'Stéphane' }, { name: 'Wendy' }, { name: 'Oum' }, { name: 'Jeremy' }, { name: 'Claudia' }];
const MockTimerTillNextDeletion: string = '00:00:00';


const GlobalContainer = () => {
  const currentProductJson = retrieveApiCall();
  const [dataInformation, setdataInformation] = useState({ teamMembers: MockTeamMembers, timerTillNextDeletion: MockTimerTillNextDeletion });
  const [dataError, setdataError] = useState("Erreur 404");
  const [dataIsLoading, setdataIsLoading] = useState(true);

  currentProductJson.then((data) => { return setdataInformation({ teamsMembers: data.currentListMember, timerTillNextDeletion: data.currentTimeBeforeNextDeletion }); });



  if (dataIsLoading) {
    return (
      <div className="MainCardContainer">
        <TimerCard timer={""} />
        <div className="MemberCardContainer">
          {[...Array(8)].map((e, i) => (<MemberCard memberInfo="" key={`Squeleton number ${i}`} />))}
        </div>
      </div>
    );
  }

  if (dataInformation) {
    return (
      <div className="MainCardContainer">
        hahaha
        <TimerCard timer={dataInformation.timerTillNextDeletion} />
        <div className="MemberCardContainer">
          {dataInformation.teamMembers.map((name) => (<MemberCard memberInfo={name} key={`MemberCard of ${name}`} />))}
        </div>
      </div>
    );
  }

  return (
    <div>L&apos;erreur est la suivante : {dataError}</div>
  );
}

export default GlobalContainer;
