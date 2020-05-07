import { useQuery, QueryOptions } from 'react-query';
import { getMembers } from '../services/client/self.service';

function useMembers(options?: QueryOptions<Member[]>) {
  const info = useQuery('members', getMembers, options);
  return { info };
}

export default useMembers;
