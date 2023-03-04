import FormNewPublication from '@/components/FormNewPublication';
import Layout from '@/components/Layout';
import Image from 'next/image';
import logoPc from '../public/logo-pc.svg';
import sloganPc from '../public/slogan-pc.svg';

export default function post() {
  return (
    <Layout noHeader noFooter>
      <div className="flex flex-col sm:flex-row h-screen">
        <aside
          style={{ backgroundColor: '#1B4DB1' }}
          className="w-full sm:w-1/5 bg-blue-800 flex flex-col justify-between p-8 sm:absolute sm:top-0 sm:left-0 sm:h-auto md:w-1/5 md:fixed md:top-0 md:left-0 md:h-screen"
        >
          <div className="flex-grow flex flex-col justify-between items-center sm:items-start sm:mt-10">
            <div className="mx-auto">
              <Image src={logoPc} width={150} height={150} alt="logo-pc" />
              <Image
                src={sloganPc}
                width={150}
                height={150}
                alt="slogan-pc"
                style={{ marginTop: '-20px' }}
              />
            </div>
            <div className="text-white">
              <h2 className="font-semibold text-yellow-300 text-lg sm:text-xl mt-5 sm:w-6 ">
                Bienvenido, creador!
              </h2>
              <p className="mt-4 text-base">
                A continuación, puedes completar la información de la marca,
                artista o torneo que quieres crear.
              </p>
            </div>
            <div className="text-white text-sm mt-5 hidden sm:block">
              <p>Ayuda</p>
            </div>
          </div>
        </aside>

        <main className="w-full sm:w-4/5 p-8 ml-auto">
          <FormNewPublication />
        </main>
      </div>
    </Layout>
  );
}
