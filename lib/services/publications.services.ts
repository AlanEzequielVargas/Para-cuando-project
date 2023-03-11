import axios from '../helpers/axios.helper';
import useSWR from 'swr';
import {fetcher} from '../helpers/fetcher.helper'

function usePublications() {
  const {data,error,isLoading,mutate} = useSWR('/publications',fetcher);
  return {
    data,error,isLoading,mutate
  };
}

async function voteAndDeleteVote(id: string){
  await axios.post(`/publications/${id}/vote`,id);
  return await axios.get(`/publications/${id}`);
}



export {
  usePublications,voteAndDeleteVote
}