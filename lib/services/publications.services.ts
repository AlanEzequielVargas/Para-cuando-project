import axios from '../helpers/axios.helper';
import useSWR from 'swr';
import {fetcher} from '../helpers/fetcher.helper'

function usePublications() {
  const {data,error,isLoading,mutate} = useSWR('/publications',fetcher);
  return {
    data,error,isLoading,mutate
  };
}

function voteAndDeleteVote(id: string){
  return axios.post(`/publications/${id}/vote`,id);
}



function createPublication(data: object){
  return axios.post('/publications' , data);
}


export {
  usePublications,voteAndDeleteVote,createPublication
}