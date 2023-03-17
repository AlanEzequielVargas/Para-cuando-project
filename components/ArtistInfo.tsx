import {
  usePublications,
  voteAndDeleteVote,
} from '@/lib/services/publications.services';
import Cookie from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
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
}

const ArtistInfo: React.FC<IArtistInfoProps> = ({
  image,
  title,
  description,
  votes,
  content,
  id,
  referenceLink,
}: IArtistInfoProps) => {
  const [isVoted, setIsVoted] = useState(false);
  const { mutate } = usePublications();

  const router = useRouter();

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
            if (Cookie.get('token')) {
              voteAndDeleteVote(id).then(() => {
                mutate();
              });
              setIsVoted(!isVoted);
              e.stopPropagation();
            } else {
              router.push('/login');
            }
          }}
        >
          <ButtonAction isVoted={isVoted} />
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
        <ButtonAction isVoted={isVoted} />
      </div>
    </div>
  );
};

export default ArtistInfo;
