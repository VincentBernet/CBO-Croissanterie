import React from 'react';
import { memberType } from '../utils/interface';

interface MemberCardProp {
  memberInfo: memberType,
}

const MemberCard = ({ memberInfo }: MemberCardProp) => {
  return (
    <div key={`${memberInfo.name} container`} className="MemberCard">
      <span key={`${memberInfo.name} name`}>{memberInfo.name}</span>
    </div>
  );
}

export default MemberCard;
