import Image from 'next/image';
import IconGrayHeart from './svgs/IconGrayHeart';
import IconPersonMini from './svgs/IconPersonMini';

const Card = () => {
  return (
    <div
      id="card"
      className="cursor-pointer flex flex-col justify-between w-299 h-454 ml-auto mr-auto mt-6 mb-6 shadow-lg rounded-3xl overflow-hidden max-sm:min-m-10"
    >
      <div className="w-full h-2/4 bg-black">
        <Image
          className="w-full h-full"
          src={'/assets/Ladygaga.jpg'}
          alt="imagen de prueba"
          width={100}
          height={100}
        />
        <div className="h-2 flex justify-end items-center pr-5">
          <IconGrayHeart />
        </div>
      </div>

      <div className="pl-5 pr-5 h-28">
        <h1 className="font-bold">Title</h1>
        <p className="h-full w-full overflow-clip">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non dolore
          vel temporibus
        </p>
      </div>
      <div className="pl-5 pr-5 pb-5">
        <p className="text-blue-600 pb-2">ladygaga.com</p>
        <div className="flex">
          <IconPersonMini />
          <p>10.000.000 Votes</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
