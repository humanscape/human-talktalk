import { useQuery } from 'react-query';
import { getMembers } from '../services/client/self.service';

function useMembers() {
  const data = useQuery('members', getMembers);
  return data;
}

export default useMembers;
