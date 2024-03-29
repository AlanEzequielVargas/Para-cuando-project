import { showAlert } from '@/lib/services/alerts.services';
import { getProfile } from '@/lib/services/auth.services';
import { usePublications, voteAndDeleteVote } from '@/lib/services/publications.services';
import { getUserVotes } from '@/lib/services/user.services';
import { toggleShowLogin } from '@/slices/showLoginSlice';
import { RootState } from '@/store/store';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconHeart from './svgs/IconHeart';
import IconPersonMini from './svgs/IconPersonMini';

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
 

  const dispatch = useDispatch();

  const { data } = getProfile();


  const isLogged = useSelector((state: RootState) => state.popUpLogin.value);

  const { data: userVotes } = getUserVotes(data?.results.id);


  const voted = userVotes?.results.results.some((item:any) => item.publications_id === id);
  
  const [isVoted, setIsVoted] = useState(voted);

  


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const logged = Cookies.get('token') === undefined;

  return (
    <div
      id="card"
      className={`bg-white relative font-roboto border flex flex-col justify-between w-299 h-454 mt-6 mb-6 shadow-lg rounded-3xl overflow-hidden max-sm:min-m-10 ${cardStyle}`}
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
            if (!logged) {
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
              dispatch(toggleShowLogin());
            }
          }}
        >
          <IconHeart fill={isVoted ? '#FF64BC' : '#D9D9D9'} />
        </div>
      </div>

      <div className="pl-5 pr-5 h-28">
        <h1 className="font-bold cursor-pointer" onClick={() => redirect()}>
          {title}
        </h1>
        <p className="h-full w-full overflow-clip text-[#6E6A6C]">
          {description}
        </p>
      </div>
      <div className="pl-5 pr-5 pb-5 space-y-2">
        <a className="text-blue-600 pb-2 cursor-pointer font-semibold">
          {referenceLink}
        </a>
        <div className="flex text-[#1A1E2E] font-bold">
          <IconPersonMini />
          <p>{votes} votos</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

