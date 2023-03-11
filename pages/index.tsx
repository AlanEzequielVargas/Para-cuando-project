// pages/index.tsx
import CategoriesBar from '@/components/CategoriesBar';
import CreateAccount from '@/components/CreateAccount';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import { usePublications } from '@/lib/services/publications.services';
import { ReactElement , useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import Slider from '../components/Slider';
import type { RootState } from '../store/store';

const Home = () => {
  const showLogin = useSelector((state: RootState) => state.popUpLogin.value);

  const { data, error, isLoading } = usePublications();

  console.log(data, error, isLoading);


  
  
  

  return (
    <>
      <Hero/>
      <Slider />
      <Slider />
      <CategoriesBar />
      <Slider />
      {showLogin && <CreateAccount />}
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
