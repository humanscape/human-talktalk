import { useCallback } from 'react';

interface Props {
  member: Member;
  onSelect: (id: string) => void;
}

const MemberItem: React.FC<Props> = ({ member, onSelect }) => {
  const handleClick = useCallback(() => {
    onSelect(member.id);
  }, [member, onSelect]);

  return (
    <div className="flex flex-row items-center py-3 px-1 bg-white hover:bg-gray-300 cursor-pointer" onClick={handleClick}>
      <img src={member.avatar} className="w-8 h-8 object-cover rounded-full" />
      <div className="ml-1 align-middle">{member.name}</div>
    </div>
  );
};

export default MemberItem;
