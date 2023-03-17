import { showAlert } from '@/lib/services/alerts.services';
import { getProfile } from '@/lib/services/auth.services';
import {
  usePublications,
  voteAndDeleteVote,
} from '@/lib/services/publications.services';
import { getUserVotes } from '@/lib/services/user.services';
import { toggleShowLogin } from '@/slices/showLoginSlice';
import { RootState } from '@/store/store';
import Cookie from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mutate } from 'swr';
import ButtonAction from './atoms/ButtonVote';
import IconPersonMini from './svgs/IconPersonMini';

interface IArtistInfoProps {
  id: string;
  image: string;
  title: string;
  description: string;
  votes: number;
  content: string;
  referenceLink: string;
  mutate: Function;
}

const ArtistInfo: React.FC<IArtistInfoProps> = ({
  image,
  title,
  description,
  votes,
  content,
  id,
  referenceLink,
  mutate,
}: IArtistInfoProps) => {
  const { data } = getProfile();

  const logged = Cookie.get('token') != undefined;
  const { data: userVotes } = getUserVotes(data?.results.id);

  const voted = userVotes?.results.results.some(
    (item: any) => item.publications_id === id
  );

  const [isVoted, setIsVoted] = useState(voted);

  const router = useRouter();

  const dispatch = useDispatch();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="h-381 w-full flex justify-between mb-52 mt-10 ml-auto mr-auto max-md:flex-col max-md:gap-y-5 max-md:w-11/12 max-md:h-550">
      <div className="h-full flex flex-col justify-between pr-10 max-md:justify-between max-md:gap-y-8">
        <h2 className="font-bold">{content}</h2>
        <div className=" h-28">
          <h1 className="font-bold text-5xl max-lg:text-4xl">{title}</h1>
          <p className="h-full w-full overflow-clip text-GRAY DARK py-3">
            {description}
          </p>
        </div>
        <div className="">
          <p className="text-blue-600 pb-2">{referenceLink}</p>
          <div className="flex">
            <IconPersonMini />
            <p>{votes} votos</p>
          </div>
        </div>
        <div
          className="max-md:hidden"
          onClick={(e) => {
            if (logged) {
              voteAndDeleteVote(id).then((res) => {
                if (voted) {
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
                } else {
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
              });
              e.stopPropagation();
              mutate();
            } else {
              scrollToTop();
              dispatch(toggleShowLogin());
            }
          }}
        >
          <ButtonAction isVoted={voted} />
        </div>
      </div>
      <div className="bg-black max-sm:w-full md:w-[539px] ">
        <Image
          className="h-[381px] w-[539px] max-sm:w-full md:w-8/12 lg:w-full"
          src={image}
          alt="event image"
          width={951}
          height={713}
        />
      </div>

      <div className="md:hidden">
        <ButtonAction isVoted={voted} />
      </div>
    </div>
  );
};

export default ArtistInfo;
