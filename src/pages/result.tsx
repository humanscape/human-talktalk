import { useCallback, useState } from 'react';

import PageTemplate from '../components/templates/PageTemplate';

import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';
import Subtitle from '../components/atoms/Subtitle';

import Section from '../components/organisms/Section';
import MemberList from '../components/organisms/MemberList';

import useResult from '../hooks/useResult';

import Swal from '../utils/client/alert.util';

const SwalBody: React.FC = ({ children }) => (
  <>
    <div className="flex flex-col">
      <div className="flex flex-row justify-start mb-4">
        <Subtitle>알림</Subtitle>
      </div>
      {children}
    </div>
  </>
);

const Result: React.FC = () => {
  const { info: { data: result }, mutation: [mutate] } = useResult(undefined, {
    onSuccess: () => {
      Swal.fire({
        html: (
          <SwalBody>
            <div className="flex flex-row text-lg justify-start mb-8">성공적으로 Slack에 결과를 전송했어요.</div>
            <div className="flex flex-row justify-end">
              <Button color="indigo" variant="primary" size="big" onClick={Swal.clickConfirm}>확인</Button>
            </div>
          </SwalBody>
        ),
        buttonsStyling: false,
        showConfirmButton: false,
      });
    },
    onError: () => {
      Swal.fire({
        html: (
          <SwalBody>
            <div className="flex flex-row text-lg justify-start mb-8">결과 전송에 실패했어요.</div>
            <div className="flex flex-row justify-end">
              <Button
                color="indigo"
                variant="tertiary"
                size="big"
                onClick={() => {
                  Swal.clickConfirm();
                  handleButtonClick();
                }}
              >
                재시도
              </Button>
              <div className="ml-4" />
              <Button color="indigo" variant="primary" size="big" onClick={Swal.clickConfirm}>확인</Button>
            </div>
          </SwalBody>
        ),
        buttonsStyling: false,
        showConfirmButton: false,
      });
    },
  });

  const [password, setPassword] = useState('');

  const handlePasswordChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);

  const handleButtonClick = useCallback(() => {
    if (!result) {
      return;
    }
    mutate({ result, password });
  }, [mutate, result, password]);

  return (
    <PageTemplate>
      <Section title="결과">
        <div className="mb-4" />
        {
          result?.payload ? (
            <>
              {
                result.payload.map(({ groupName, members }) => (
                  <MemberList key={groupName} title={groupName} members={members} />
                ))
              }
              <div>
                <Subtitle>결과 알려주기</Subtitle>
                <div className="flex flex-row items-center mt-4">
                  <Input value={password} onChange={handlePasswordChange} className="w-48" placeholder="비밀번호 486" type="password" />
                  <div className="mx-3">이거 받고</div>
                  <Button variant="primary" color="indigo" size="big" onClick={handleButtonClick}>Slack으로 전송하기</Button>
                </div>
              </div>
            </>
          ) : (
            <div>에러 발생</div>
          )
        }
      </Section>
    </PageTemplate>
  );
};

export default Result;
