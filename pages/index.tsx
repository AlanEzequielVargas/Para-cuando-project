// pages/index.tsx
import CategoriesBar from '@/components/CategoriesBar';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import { ReactElement, useEffect } from 'react';
import Swal from 'sweetalert2';
import Slider from '../components/Slider';

const Home = () => {
  useEffect(() => {
    showAlert();
  }, []);

  const showAlert = () => {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      html: '<p>Página cargada exitosamente.</p>',
      timer: 1500,
    });
  };

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
