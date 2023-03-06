// pages/index.tsx
import CategoriesBar from '@/components/CategoriesBar';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import { ReactElement } from 'react';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <>
      <Hero />
      <Slider />
      <Slider />
      <CategoriesBar />
      <Slider />
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
