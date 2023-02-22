import Image from 'next/image';
import React from 'react';

const Card = () => {
  return (
    <div id='card' className="cursor-pointer flex flex-col w-60 h-96 ml-auto mr-auto mt-6 mb-6 shadow-md rounded-2xl overflow-hidden">
      <div className="w-full h-2/4 bg-black"> 
        <Image
        className='w-full h-full'
          src={'/assets/chapulin.jpg'}
          alt="imagen de prueba"
          width={100}
          height={100}
        />
      </div>
      <div>
        <button>atom button</button>
        <h1>Title</h1>
        <p>Description</p>
        <p className="text-blue-600">Link.com</p>
        <p>Votes</p>
      </div>
    </div>
  );
};

export default Card;
