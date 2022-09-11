
interface MemberCardProp {
    memberInfo: string,
}

const MemberCard = ({memberInfo }: MemberCardProp) => {
    return (
    <div key={memberInfo} className="MemberCard">
        <span>{memberInfo}</span>
    </div>);
}

export default MemberCard;