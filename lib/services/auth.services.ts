import axios from '../helpers/axios.helper';
import useSWR from 'swr';
import {fetcher} from '../helpers/fetcher.helper'

function login(userData: any){
  return axios.post('/auth/login', userData)
}

function signUp(userData: {email: string , password: string}){
  return axios.post('/auth/sign-up', userData)
}


function getProfile() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {data,error,isLoading,mutate} = useSWR('/auth/me',fetcher);
  return {
    data,error,isLoading,mutate
  };
}


export {
  login,signUp,getProfile
}