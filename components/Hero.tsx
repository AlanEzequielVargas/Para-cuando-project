import Image from 'next/image';
import { useRouter } from 'next/router';
import ButtonSection from './atoms/ButtonSection';

const Hero = () => {
  const router = useRouter();

  return (
    <div className="relative h-[30.5rem] bg-[url('/assets/hero-background.jpg')] bg-cover bg-center">
      <div className="absolute w-full h-full text-white">
        <div className="flex justify-center items-center flex-col h-full">
          <Image
            src={'/assets/para-cuando-logo.png'}
            alt={'para-cuando-logo'}
            width={250}
            height={250}
          />
          <div className="relative">
            <input
              className="h-11 w-96 md:w-96 pl-4 pr-12 rounded-3xl mt-7 text-black"
              type="search"
              name=""
              id=""
              placeholder="¿Qué quieres ver en tu ciudad?"
            />
            <div className="absolute bottom-[12%] right-[5%]  flex items-center pl-3 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-row justify-between w-96 pt-5 text-sm">
            <div onClick={() => router.push('/brands')}>
              <ButtonSection name="Marcas y tiendas" />
            </div>
            <div onClick={() => router.push('/artists')}>
              <ButtonSection name="Artistas y conciertos" />
            </div>
            <div onClick={() => router.push('/tournaments')}>
              <ButtonSection name="Torneos" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
