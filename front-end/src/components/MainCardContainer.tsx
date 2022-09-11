import React from "react";
import "./MainCardContainer.css";
import MemberCard from "./MemberCard";
import TimerCard from "./TimerCard";


interface MainCardContainerProps {
    TeamMembers: string[],
}

const MainCardContainer = ({TeamMembers} : MainCardContainerProps) => {
    return (    
    <div className="MainCardContainer">
        <TimerCard timer={"2 H 35 Min 45 Secondes"}/>
        <div className="MemberCardContainer">
            {TeamMembers.map(name=> (<MemberCard memberInfo={name} key={"MemberCard of " + name}/>))}
        </div>
    </div>);
};

export default MainCardContainer;