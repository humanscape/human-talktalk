import { useCallback } from 'react';

import Button from '../atoms/Button';
import Subtitle from '../atoms/Subtitle';
import MemberItem from '../molecules/MemberItem';

interface Props {
  title: string;
  members: Member[];
  selectAllText?: string;
  onMemberSelect?: (id: string) => void;
  onSelectAll?: () => void;
}

const MemberList: React.FC<Props> = ({
  title, members, selectAllText, onMemberSelect = () => {}, onSelectAll = () => {},
}) => {
  const renderMember = useCallback((member) => (
    <MemberItem member={member} key={member.name} onSelect={onMemberSelect} />
  ), [onMemberSelect]);

  return (
    <div className="mb-8">
      <div className="flex flex-row items-center align-middle">
        <Subtitle>{title}</Subtitle>
        {
          selectAllText && (
            <>
              <div className="ml-4" />
              <Button variant="tertiary" color="indigo" disabled={!members.length} onClick={onSelectAll}>{selectAllText}</Button>
            </>
          )
        }
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 mt-4">
        {members.length ? members.map(renderMember) : <span className="text-2xl ml-1" role="img" aria-label="없음">🙅🏽</span>}
      </div>
    </div>
  );
};

export default MemberList;
