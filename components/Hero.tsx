import Image from 'next/image';
import { useRouter } from 'next/router';
import ButtonSection from './atoms/ButtonSection';
import Input from './atoms/Input';

const Hero = () => {
  const router = useRouter();

  return (
    <div className="relative h-[30.5rem] bg-[url('/assets/hero-background.jpg')] bg-cover bg-center">
      <div className="absolute w-full h-full text-white">
        <div className="flex justify-center items-center flex-col h-full gap-y-5">
          <Image
            src={'/assets/para-cuando-logo.png'}
            alt={'para-cuando-logo'}
            width={250}
            height={250}
          />
          <div className="relative w-[343px] sm:w-[465px]">
            <Input/>
          </div>
          <div className="flex flex-row justify-around text-sm w-[362px] sm:w-[400px]">
            <div onClick={() => router.push('/brands')}>
              <ButtonSection name="Marcas y tiendas" style='h-8 px-1 sm:px-3'/>
            </div>
            <div onClick={() => router.push('/artists')}>
              <ButtonSection name="Artistas y conciertos" style='h-8 px-1 sm:px-3'/>
            </div>
            <div onClick={() => router.push('/tournaments')}>
              <ButtonSection name="Torneos" style='h-8 px-1 sm:px-3'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
