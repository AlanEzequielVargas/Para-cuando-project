import ButtonAction from '@/components/atoms/ButtonAction';
import ButtonSection from '@/components/atoms/ButtonSection';
import Input from '@/components/atoms/Input';
import Slider from '@/components/Slider';
import IconMenu from '@/components/svgs/IconMenu';
import IconPersonMini from '@/components/svgs/IconPersonMini';
import Image from 'next/image';

export default function details() {
  return (
    <div>
      <div
        id="white-navbar"
        className="h-24 flex justify-evenly items-center shadow-md max-sm:justify-evenly"
      >
        <div className="w-96 flex justify-evenly max-sm:hidden">
          <ButtonSection />
          <ButtonSection />
          <ButtonSection />
        </div>
        <div className="h-11 w-11 rounded-full sm:hidden">
          <IconMenu />
        </div>

        <div className="max-sm:w-72 ">
          <Input />
        </div>
      </div>
      <div className="h-381 w-9/12 flex justify-between mb-52 mt-10 ml-auto mr-auto max-md:flex-col max-md:gap-y-5 max-md:w-11/12 max-md:h-550">
        <div className="h-full flex flex-col justify-between pr-10 max-md:justify-between max-md:gap-y-5">
          <h2 className='font-bold'>Artista / Genero</h2>
          <div className=" h-28">
            <h1 className="font-bold text-6xl max-md:text-4xl">Title</h1>
            <p className="h-full w-full overflow-clip text-GRAY DARK">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
              dolore vel temporibus
            </p>
          </div>
          <div className="">
            <p className="text-blue-600 pb-2">ladygaga.com</p>
            <div className="flex">
              <IconPersonMini />
              <p>10.000.000 Votes</p>
            </div>
          </div>
          <div className='max-md:hidden'>
            <ButtonAction />
          </div>
          
        </div>
        <Image
          className="h-381 w-539 max-md:w-full"
          src={'/assets/Ladygaga.jpg'}
          alt="imagen de prueba"
          width={100}
          height={100}
        />
        <div className='md:hidden'>
            <ButtonAction />
        </div>
      </div>
      <div className="flex flex-col justify-between m-auto h-56 w-9/12 bg-grey text-GRAY pl-10 pr-10 pt-4 pb-4 mb-28 max-sm:w-12/12">
        <h1 className="text-grey2">!Hagámoslo más personal!</h1>
        <h3>
          Selecciona tus intereses para brindarte sugerencia de acuerdo a tus
          gustos
        </h3>
        <div className="flex justify-evenly w-380 max-sm:w-auto">
          <ButtonSection />
          <ButtonSection />
          <ButtonSection />
        </div>
        <a href="#" className="text-BLUE font-bold">
          Ver todos los intereses
        </a>
      </div>
      <Slider />
    </div>
  );
}
