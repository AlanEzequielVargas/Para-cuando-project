import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher.helper';
import axios from '../helpers/axios.helper';

function useUserMe() {
  const { data, error, isLoading, mutate } = useSWR(
    '/users/user-info',
    fetcher
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

function getUserVotes(id:string) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {data,error,isLoading,mutate} = useSWR(`/users/${id}/votes`,fetcher);
  return {
    data,error,isLoading,mutate
  };
}

function getUserPublications(id:string) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {data,error,isLoading,mutate} = useSWR(`/users/${id}/publications`,fetcher);
  return {
    data,error,isLoading,mutate
  };
}
function updateUserProfile(id: any,body:any){
  return axios.put(`/users/${id}`,body);
}

export { useUserMe ,getUserVotes,getUserPublications,updateUserProfile};
