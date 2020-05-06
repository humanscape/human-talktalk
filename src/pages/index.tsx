import { useState, useMemo, useCallback } from 'react';
import MemberList from '../components/organisms/MemberList';
import Section from '../components/organisms/Section';

import PageTemplate from '../components/templates/PageTemplate';

import useMembers from '../hooks/useMembers';

import { sortMember } from '../utils/api/format.util';

const Home: React.FC = () => {
  const { status, data: members } = useMembers();

  const [selected, setSelected] = useState<Member[]>([]);
  const unselected = useMemo(
    () => members?.filter((member) => !selected.find((select) => select.id === member.id)).sort(sortMember) ?? [],
    [members, selected],
  );

  const handleSelect = useCallback((id: string) => {
    const newMember = members?.find((member) => member.id === id);
    setSelected((prev) => (
      newMember
        ? prev.concat(newMember).sort(sortMember)
        : prev
    ));
  }, [members]);

  const handleUnselect = useCallback((id: string) => {
    setSelected((prev) => prev.filter((m) => m.id !== id).sort(sortMember));
  }, []);

  const handleSelectAll = useCallback(() => {
    setSelected((members ?? []).sort());
  }, [members]);

  const handleUnselectAll = useCallback(() => {
    setSelected([]);
  }, []);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>An error occured!</div>;
  }

  return (
    <PageTemplate>
      <Section title="룰렛">
        <MemberList title="참석 멤버" selectAllText="모두 불참" onMemberSelect={handleUnselect} onSelectAll={handleUnselectAll} members={selected} />
        <MemberList title="불참 멤버" selectAllText="모두 참석" onMemberSelect={handleSelect} onSelectAll={handleSelectAll} members={unselected} />
      </Section>
    </PageTemplate>
  );
};

export default Home;
