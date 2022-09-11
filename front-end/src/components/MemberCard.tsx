
interface MemberCardProp {
    memberInfo: string,
}

const MemberCard = ({memberInfo }: MemberCardProp) => {
    return (
    <div key={memberInfo + " container"} className="MemberCard">
        <span key={memberInfo + " name"}>{memberInfo}</span>
    </div>);
}

export default MemberCard;