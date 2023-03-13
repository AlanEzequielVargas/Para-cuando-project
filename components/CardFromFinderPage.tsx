import { voteAndDeleteVote } from "@/lib/services/publications.services";
import { popUpLogin } from "@/slices/popUpLoginSlice";
import Cookies from "js-cookie";
import Image from "next/image";
import { useDispatch } from "react-redux";
import IconHeart from "./svgs/IconHeart";
import IconPersonMini from "./svgs/IconPersonMini";
import {useState} from 'react'

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
      className={`relative font-roboto cursor-pointer border flex justify-between xs:w-[365px] sm:w-[394px] h-[197px] lg:w-[934px] lg:h-[239px] mt-6 mb-6 shadow-lg rounded-3xl overflow-hidden max-sm:min-m-10 ${cardStyle} bg-white`}
      
    >
      <div className="w-[121px] lg:w-[239px] h-full bg-black rounded-3xl">
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
          <div className='font-roboto py-2 sm:py-5 w-6/12 m-auto lg:w-7/12 sm:space-y-2 mt-5'>
            <div className="">
        <h1 className="font-bold text-[20px] lg:text-[30px] text-[#1A1E2E]" onClick={() => redirect()}>{title}</h1>
        <p className="h-full w-full overflow-clip lg:text-[20px] text-[#6E6A6C]">
          {description}
        </p>
      </div>
      <div className="pt-5 lg:pt-10">
        <a className="text-blue-600 cursor-pointer font-semibold lg:text-[18px] ">
          ladygaga.com
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
