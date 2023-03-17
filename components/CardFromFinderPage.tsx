import { voteAndDeleteVote } from '@/lib/services/publications.services';
import { popUpLogin } from '@/slices/popUpLoginSlice';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import IconHeart from './svgs/IconHeart';
import IconPersonMini from './svgs/IconPersonMini';
import { useState } from 'react';
import { getProfile } from '@/lib/services/auth.services';
import { getUserVotes } from '@/lib/services/user.services';
import { RootState } from '@/store/store';
import { showAlert } from '@/lib/services/alerts.services';

interface ICardProps {
  id: string;
  cardStyle: string;

  image: string;
  title: string;
  description: string;
  votes: number;
  redirect: Function;
  mutate: Function;
  referenceLink: string;
}

const Card: React.FC<ICardProps> = ({
  id,
  cardStyle,
  
  image,
  title,
  description,
  votes,
  redirect,
  mutate,
  referenceLink,
}: ICardProps) => {
  const [colorHeart, setColor] = useState(true);

  //redux configuracion
  const dispatch = useDispatch();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const { data } = getProfile();


  const isLogged = useSelector((state: RootState) => state.popUpLogin.value);

  const { data: userVotes } = getUserVotes(data?.results.id);
 

  const voted = userVotes?.results.results.some((item:any) => item.publications_id === id);
  
  const [isVoted, setIsVoted] = useState(voted);

  return (
    <div
      id="card"
      className={`relative font-roboto cursor-pointer border flex justify-between h-[197px] lg:h-[239px] max-xs:w-11/12 max-md:w-10/12 mt-6 mb-6 shadow-lg rounded-3xl overflow-hidden max-sm:min-m-10 ${cardStyle} bg-white`}
    >
      <div className="w-[121px] sm:w-[200px] md:w-[239px] h-full bg-black rounded-3xl">
        <Image
          className="w-full h-full"
          src={image}
          alt="imagen de prueba"
          width={100}
          height={100}
        />

        <div
          className="h-0 flex justify-end items-center pr-5 z-30 absolute -right-2 top-6"
          onClick={(e) => {
            if (Cookies.get('token')) {
              setColor(!colorHeart);
              voteAndDeleteVote(id).then(() => mutate());
              e.stopPropagation();
              if(isVoted){
                showAlert(
                  '',
                  true,
                  'Quitaste tu voto de esta publicación',
                  'success',
                  2000,
                  'white',
                  false,
                  'rgb(0 0 0 / 0.0)',
                  '💔'
                );
              }else{
                showAlert(
                  '',
                  true,
                  'Tu voto fue enviado con exito!',
                  'success',
                  2000,
                  'white',
                  false,
                  'rgb(0 0 0 / 0.0)',
                  '❤'
                );
              }
            } else {
              scrollToTop();
              dispatch(popUpLogin());
            }
          }}
        >
          <IconHeart fill={isVoted ? '#FF64BC' : '#D9D9D9'} />
        </div>
      </div>
      <div className="font-roboto flex items-start h-full w-full pr-16 md:pr-12 pl-4 md:pl-10 py-4">
        <div className="">
          <h1
            className="font-bold text-[19px] md:text-[30px] text-[#1A1E2E] lg:pb-2"
            onClick={() => redirect()}
          >
            {title}
          </h1>
          <p className=" h-full w-full overflow-clip md:text-[20px]  text-[#6E6A6C]">
            {description}
          </p>
        </div>
        <div className="pt-2 pb-4 lg:pt-10 bg-white absolute bottom-0 w-full shadow-white shadow-lg">
          <a className="text-blue-600 cursor-pointer font-semibold md:text-[18px]  ">
            {referenceLink}
          </a>
          <div className="flex text-[#1A1E2E] font-bold lg:text-[18px]">
            <IconPersonMini />
            <p>{votes} votos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
