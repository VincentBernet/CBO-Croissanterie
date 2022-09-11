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
        {TeamMembers.map(name=> (<MemberCard memberInfo={name}/>))}
    </div>);
};

export default MainCardContainer;