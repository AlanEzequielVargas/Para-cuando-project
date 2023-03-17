import FormNewPublication from '@/components/FormNewPublication';
import Layout from '@/components/Layout';
import Image from 'next/image';
import logoPc from '../public/logo-pc.svg';
import sloganPc from '../public/slogan-pc.svg';

export default function post() {
  return (
    <Layout noHeader noFooter>
      <div className="flex flex-col md:flex-row h-full font-roboto">
        <aside
          style={{ backgroundColor: '#1B4DB1' }}
          className="w-full bg-blue-800 flex flex-col justify-between p-8 md:w-1/5 md:h-full md:fixed"
        >
          <div className="flex-grow flex flex-col justify-between items-center md:items-start md:mt-10">
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
              <h2 className="font-semibold text-yellow-300 text-lg md:text-xl mt-5 md:w-6">
                Bienvenido, creador!
              </h2>
              <p className="mt-4 text-base">
                A continuación, puedes completar la información de la marca,
                artista o torneo que quieres crear.
              </p>
            </div>
            <div className="text-white text-sm mt-5 hidden md:block">
              <p>Ayuda</p>
            </div>
          </div>
        </aside>

        <main className="w-full md:w-4/5 p-8 ml-auto">
          <FormNewPublication />
        </main>
      </div>
    </Layout>
  );
}
