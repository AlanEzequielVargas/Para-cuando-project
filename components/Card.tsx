import Image from 'next/image';
import IconHeart from './svgs/IconHeart';
import IconPersonMini from './svgs/IconPersonMini';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { popUpLogin } from '@/slices/popUpLoginSlice';
import Cookie from 'js-cookie';
import { voteAndDeleteVote } from '@/lib/services/publications.services';


interface ICardProps {
  id: string;
  cardStyle: string;
  fill: string;
  image: string;
  title: string;
  description: string;
  votes: number;
  redirect: Function;
  mutate: Function;
}

const Card: React.FC<ICardProps> = ({ id,cardStyle, fill ,image,title,description,votes,redirect,mutate}: ICardProps) => {
  
  const [colorHeart, setColor] = useState(true);


  //redux configuracion
  const dispatch = useDispatch();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };



  return (
    <div
      id="card"
      className={`relative font-roboto cursor-pointer border flex flex-col justify-between w-299 h-454 mt-6 mb-6 shadow-lg rounded-3xl overflow-hidden max-sm:min-m-10 ${cardStyle}`}
      
    >
      <div className="w-full h-2/4 bg-black">
        <Image
          className="w-full h-full"
          src={image}
          alt="imagen de prueba"
          width={100}
          height={100}
        />

        <div
          className="h-0 flex justify-end items-center pr-5 z-30 absolute right-0 top-[215px]"
          onClick={(e) => {
            if (Cookie.get('token')) {
              setColor(!colorHeart);
              voteAndDeleteVote(id)
              .then(() => mutate());
              e.stopPropagation();
            } else {
              scrollToTop();
              dispatch(popUpLogin());
            }
          }}
        >
          <IconHeart fill={colorHeart ? fill : '#FF64BC'} />

        </div>
      </div>

      <div className="pl-5 pr-5 h-28">
        <h1 className="font-bold" onClick={() => redirect()}>{title}</h1>
        <p className="h-full w-full overflow-clip">
          {description}
        </p>
      </div>
      <div className="pl-5 pr-5 pb-5 space-y-2">
        <a className="text-blue-600 pb-2 cursor-pointer font-semibold">
          ladygaga.com
        </a>
        <div className="flex">
          <IconPersonMini />
          <p>{votes} votos</p>
        </div>
      </div>
    </div>
  );
};

export default Card;


