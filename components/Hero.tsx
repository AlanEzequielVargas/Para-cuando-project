import React from 'react';
import Image from 'next/image';
import Input from './atoms/Input';

const Hero = () => {
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
          <div className='mt-5 text-black'>
            <Input />
          </div>
          <div className="flex flex-row justify-between w-96 pt-5 text-sm">
            <button className="bg-white text-gray-500 border-gray-500 h-7 rounded-2xl px-4">
              Marcas y tiendas
            </button>
            <button className="bg-white text-gray-500 border-gray-500 h-7 rounded-2xl px-4">
              Artistas y conciertos
            </button>
            <button className="bg-white text-gray-500 border-gray-500 h-7 rounded-2xl px-4">
              Torneos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
