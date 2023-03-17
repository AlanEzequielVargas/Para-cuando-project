// pages/index.tsx
import CategoriesBar from '@/components/CategoriesBar';
import CreateAccount from '@/components/CreateAccount';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import { usePublications } from '@/lib/services/publications.services';
import { popUpLoginClose } from '@/slices/popUpLoginSlice';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropagateLoader } from 'react-spinners';
import 'sweetalert2/dist/sweetalert2.min.css'; // Importar el archivo CSS predeterminado de SweetAlert2
import Slider from '../components/Slider';
import type { RootState } from '../store/store';

const Home = () => {
  const showLogin = useSelector((state: RootState) => state.showLogin.value);
  const { error, isLoading } = usePublications();

  const dispatch = useDispatch();

  useEffect(() => {
    if (Cookies.get('token')) {
      dispatch(popUpLoginClose());
    } else dispatch(popUpLoginClose());
  }, []);

  return (
    <>
      {error ? (
        <div className="relative w-full h-screen flex flex-col justify-center items-center">
        <h1 className='text-4xl'>Ocurrió un error... 😰</h1>
        <Image src="/assets/error-guy-image.gif" width={300} height={300} alt="error-image" priority className='absolute -bottom-2'/>
      </div>
      ) : isLoading ? (
        <div className="w-screen h-screen flex justify-center items-center text-4xl">
          <PropagateLoader color="#000000" />
        </div>
      ) : (<>
        <Hero />
        <div className="md:w-10/12 lg:w-[1000px] mx-auto my-20">
          <Slider
            title="Populares en Querétaro"
            subtitle="Lo que las personas piden más"
          />
          <Slider
            title="Sugerencias para ti"
            subtitle="Publicaciones que podrías colaborar"
          />
          <CategoriesBar />
          <Slider
            title="Recientes"
            subtitle="Las personas últimanete están hablando de esto"
          />
        </div>

        {showLogin && <CreateAccount />}
      </>)}
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
