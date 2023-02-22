import Image from 'next/image';
import React from 'react';

const Card = () => {
  return (
    <div className="cursor-pointer flex flex-col w-60">
      <div className="w-80 h-80"> 
        <Image
          src={'/assets/chapulin.jpg'}
          alt="imagen de prueba"
          width={100}
          height={50}
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
