import React, { useState } from 'react';
import './GlobalContainer.css';
import MemberCard from './MemberCard';
import TimerCard from './TimerCard';

const MockTeamMembers: string[] = ['Vincent', 'Kevin', 'Jean', 'Jean-Christophe', 'Hakima', 'Aya', 'Virgil', 'Stéphane', 'Wendy', 'Oum', 'Jeremy', 'Claudia'];
const MockTimerTillNextDeletion: string = '00:00:00';

export async function getAllUsers() {
  try {
    const response = await fetch('https://croissanterie-backend.herokuapp.com/members/current-list');
    return await response.json();
  } catch (error) {
    return ["hahah"];
  }

}

const GlobalContainer = async () => {
  const [dataInformation, setdataInformation] = useState({ teamMembers: MockTeamMembers, timerTillNextDeletion: MockTimerTillNextDeletion });
  const [dataError, setdataError] = useState("Erreur 404");
  const [dataIsLoading, setdataIsLoading] = useState(false);
  setdataInformation(await getAllUsers());

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
