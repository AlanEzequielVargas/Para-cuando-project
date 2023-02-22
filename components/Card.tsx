import Image from 'next/image';
import React from 'react';

const Card = () => {
  return (
    <div className="cursor-pointer flex flex-col w-60">
      <div className="w-80 h-80"> 
        <Image
          src="https://i1.sndcdn.com/artworks-000099014804-p6qz2i-t500x500.jpg"
          alt="imagen de prueba"
          width={500}
          height={500}
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
