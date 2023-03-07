// pages/index.tsx
import CategoriesBar from '@/components/CategoriesBar';
import CreateAccount from '@/components/CreateAccount';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import Slider from '../components/Slider';
import type { RootState } from '../store/store';

const Home = () => {
  const showLogin = useSelector((state: RootState) => state.popUpLogin.value);

  return (
    <>
      <Hero />
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
