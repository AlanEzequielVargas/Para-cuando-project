import ButtonAction from '@/components/atoms/ButtonAction';
import CategoriesBar from '@/components/CategoriesBar';
import SearchNavBar from '@/components/SearchNavbar';
import Slider from '@/components/Slider';
import IconPersonMini from '@/components/svgs/IconPersonMini';
import Image from 'next/image';

export default function details() {
  return (
    <div>
      <SearchNavBar/>
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
      <CategoriesBar/>
      <Slider />
    </div>
  );
}
