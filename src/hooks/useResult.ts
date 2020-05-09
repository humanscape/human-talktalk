import {
  useQuery, QueryOptions, useMutation, MutationOptions,
} from 'react-query';
import { sendResult } from '../services/client/self.service';

function useResult(options?: QueryOptions<Result>, mutateOptions?: MutationOptions<any, any>) {
  const info = useQuery('result', async () => ({} as Result), {
    ...options,
    manual: true,
    refetchInterval: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
  });

  const mutation = useMutation(sendResult, { ...mutateOptions });

  return { info, mutation };
}

export default useResult;
