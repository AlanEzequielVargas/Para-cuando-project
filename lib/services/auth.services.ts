import axios from '../helpers/axios.helper';

function login(userData: any){
  return axios.post('/auth/login', userData)
}

function signUp(userData: {email: string , password: string}){
  return axios.post('/auth/sign-up', userData)
}

export {
  login,signUp
}