import MemberItem from '../components/molecules/MemberItem';
import useMembers from '../hooks/useMembers';

const Home: React.FC = () => {
  const { status, data: members } = useMembers();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>An error occured!</div>;
  }

  return (
    <div className="flex flex-row flex-wrap items-center p-2 bg-white">
      {members?.map((member) => <MemberItem member={member} key={member.name} />) ?? null}
    </div>
  );
};

export default Home;
