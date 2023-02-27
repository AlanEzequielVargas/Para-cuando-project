import FormNewPublication from '@/components/FormNewPublication';
import Image from 'next/image';
import Link from 'next/link';
import logoPc from '../public/logo-pc.svg';
import sloganPc from '../public/slogan-pc.svg';

export default function post() {
  return (
    <div className="flex">
      <div className="aside">
        <aside className="h-screen w-1/5 bg-blue-800 flex flex-col justify-between p-8">
          <div className="flex-grow flex flex-col justify-between items-start">
            <div className="mt-10 mx-auto">
              <Image src={logoPc} width={130} height={130} alt="logo-pc" />
              <Image src={sloganPc} width={130} height={130} alt="slogan-pc" />
            </div>
            <div className="text-white">
              <h2 className="font-semibold" style={{ color: 'yellow' }}>
                Bienvenido, <br /> creador!
              </h2>
              <p className="mt-4 text-base">
                A continuación, puedes completar la información de la marca,
                artista o torneo que quieres crear.
              </p>
            </div>
            <div className="text-white text-left text-sm">
              <p>Ayuda</p>
            </div>
          </div>
        </aside>
      </div>
      <main className="w-4/5 p-8 main-form_post">
        <Link href={'/'} className="text-blue-800 mb-10">
          Back
        </Link>
        <FormNewPublication />
      </main>
    </div>
  );
}
