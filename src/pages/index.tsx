import {
  useState, useMemo, useCallback, ChangeEvent,
} from 'react';

import Button from '../components/atoms/Button';
import Subtitle from '../components/atoms/Subtitle';
import Input from '../components/atoms/Input';

import MemberList from '../components/organisms/MemberList';
import Section from '../components/organisms/Section';

import PageTemplate from '../components/templates/PageTemplate';

import useMembers from '../hooks/useMembers';

import { mapToResult } from '../utils/client/format.util';
import { compareMember } from '../utils/common/compare.util';
import { getShuffledArray, getBalancedChunks } from '../utils/common/array.util';

const Home: React.FC = () => {
  const [selected, setSelected] = useState<Member[]>([]);
  const [size, setSize] = useState(0);
  const {
    info: { status, data: members },
  } = useMembers({
    onSuccess: (val) => {
      setSelected(val);
      setSize(val.length > 2 ? 2 : val.length);
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  const unselected = useMemo(
    () => members?.filter((member) => !selected.find((select) => select.id === member.id)).sort(compareMember) ?? [],
    [members, selected],
  );

  const handleSizeChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setSize(0);
      return;
    }

    setSize(parseInt(event.target.value, 10));
  }, []);

  const isRouletteDisabled = useMemo(() => size === 0 || size > selected.length, [selected, size]);

  const handleSelect = useCallback((id: string) => {
    const newMember = members?.find((member) => member.id === id);
    setSelected((prev) => (
      newMember
        ? prev.concat(newMember).sort(compareMember)
        : prev
    ));
  }, [members]);

  const handleUnselect = useCallback((id: string) => {
    setSelected((prev) => prev.filter((m) => m.id !== id).sort(compareMember));
  }, []);

  const handleSelectAll = useCallback(() => {
    setSelected((members ?? []).sort());
  }, [members]);

  const handleUnselectAll = useCallback(() => {
    setSelected([]);
  }, []);

  const handleRoulette = useCallback(() => {
    const result = mapToResult(getBalancedChunks(getShuffledArray(selected), size));
    console.log(result);
  }, [selected, size]);

  return (
    <PageTemplate>
      <Section title="룰렛">
        <div className="mb-4" />
        {
          status === 'loading' && <div>로딩 중</div>
        }
        {
          status === 'error' && <div>에러 발생!</div>
        }
        {
          status === 'success' && (
            <>
              <MemberList title="참석 멤버" selectAllText="모두 불참" onMemberSelect={handleUnselect} onSelectAll={handleUnselectAll} members={selected} />
              <MemberList title="불참 멤버" selectAllText="모두 참석" onMemberSelect={handleSelect} onSelectAll={handleSelectAll} members={unselected} />
              <div>
                <Subtitle>당신은 최고의 금손</Subtitle>
                <div className="flex flex-row items-center mt-4">
                  <div className="mr-3">한 팀에 약</div>
                  <Input value={size} onChange={handleSizeChange} className="w-16" />
                  <div className="mx-3">명이 함께하는 룰렛</div>
                  <Button variant="primary" color="indigo" size="big" disabled={isRouletteDisabled} onClick={handleRoulette}>돌리기</Button>
                </div>
                {
                  isRouletteDisabled && (
                    <div className="text-red-400">
                      {size === 0 && '팀원이 없는 팀이요..? 😭'}
                      {size > selected.length && '어... 그건 좀 많은 것 같아요!'}
                    </div>
                  )
                }
              </div>
            </>
          )
        }
      </Section>
    </PageTemplate>
  );
};

export default Home;
