interface Props {
  member: Member;
}

const MemberItem: React.FC<Props> = ({ member }) => (
  <div className="flex flex-row items-center p-2 bg-white">
    <div className="flex flex-row items-center p-2 bg-white">
      <img src={member.avatar} className="w-8 h-8 object-cover rounded-full" />
      <div className="ml-1 align-middle">{member.name}</div>
    </div>
  </div>
);

export default MemberItem;
