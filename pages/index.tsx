// pages/index.tsx
import CategoriesBar from '@/components/CategoriesBar';
import CreateAccount from '@/components/CreateAccount';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import { usePublications } from '@/lib/services/publications.services';
import {  showAlert } from '@/lib/services/alerts.services';
import { ReactElement , useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import Slider from '../components/Slider';
import type { RootState } from '../store/store';
import 'sweetalert2/dist/sweetalert2.min.css'; // Importar el archivo CSS predeterminado de SweetAlert2


const Home = () => {
  const showLogin = useSelector((state: RootState) => state.showLogin.value);

  const { data, error, isLoading } = usePublications();

  console.log(data, error, isLoading);

  

  return (
    <>{!isLoading ? (<><Hero/>
      <Slider title='Populares en Querétaro' subtitle='Lo que las personas piden más'/>
      <Slider title='Sugerencias para ti' subtitle='Publicaciones que podrías colaborar'/>
      <CategoriesBar />
      <Slider title='Recientes' subtitle='Las personas últimanete están hablando de esto'/>
      {showLogin && <CreateAccount />}</>) : (<div className='w-screen h-screen flex justify-center items-center text-4xl'>Cargando...</div>)}
      
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
