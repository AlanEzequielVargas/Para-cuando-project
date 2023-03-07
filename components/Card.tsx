import Image from 'next/image';
import IconHeart from './svgs/IconHeart';
import IconPersonMini from './svgs/IconPersonMini';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { popUpLogin } from '@/slices/popUpLoginSlice';
interface ICardProps {
  cardStyle: string;
  /* fill: string; */
}

const Card: React.FC<ICardProps> = ({ cardStyle/* , fill */ }: ICardProps) => {
  const [user, setUser] = useState([]);

  const [colorHeart, setColor] = useState(true);

  useEffect(() => {
    const userParseado = JSON.parse(localStorage.getItem('User') || '[]');
    setUser(userParseado);
  }, []);

  const router = useRouter();

  //redux configuracion
  const dispatch = useDispatch();

  return (
    <div
      id="card"
      className={`font-roboto cursor-pointer border flex flex-col justify-between w-299 h-454 mt-6 mb-6 shadow-lg rounded-3xl overflow-hidden max-sm:min-m-10 ${cardStyle}`}
    >
      <div className="w-full h-2/4 bg-black">
        <Image
          className="w-full h-full"
          src={'/assets/Ladygaga.jpg'}
          alt="imagen de prueba"
          width={100}
          height={100}
        />
        <div
          className="h-2 flex justify-end items-center pr-5"
          onClick={() => {
            if (user.email) {
              setColor(!colorHeart);
            } else {
              dispatch(popUpLogin());
              router.push('/');
            }
          }}
        >
          <IconHeart fill={colorHeart ? '#D9D9D9' : '#FF64BC'} />
        </div>
      </div>

      <div className="pl-5 pr-5 h-28">
        <h1 className="font-bold">Title</h1>
        <p className="h-full w-full overflow-clip">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non dolore
          vel temporibus
        </p>
      </div>
      <div className="pl-5 pr-5 pb-5 space-y-2">
        <a className="text-blue-600 pb-2 cursor-pointer font-semibold">
          ladygaga.com
        </a>
        <div className="flex">
          <IconPersonMini />
          <p>10.000.000 Votes</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

/* import Image from 'next/image';
import IconHeart from './svgs/IconHeart';
import IconPersonMini from './svgs/IconPersonMini';
import Swal from 'sweetalert2';
import { useState, useEffect, createContext } from 'react';

export const ColorHeartContext = createContext({});

interface ICard extends React.ComponentPropsWithoutRef<'svg'> {}

const Card: React.FC<ICard> = ({ ...iconProps }) => {
  const [user, setUser] = useState([]);
  
  const [colorHeart, setColor] = useState(true);
  
  useEffect(() => {
    const userParseado = JSON.parse(localStorage.getItem('User') || '[]');
    setUser(userParseado);
  }, []);

  return (
    <ColorHeartContext.Provider value={colorHeart}>
      <div
        id="card"
        className="cursor-pointer border flex flex-col justify-between w-299 h-454 ml-auto mr-auto mt-6 mb-6 shadow-lg rounded-3xl overflow-hidden max-sm:min-m-10"
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
            <IconHeart
              className="absolute cursor-pointer"
              {...iconProps}
              onClick={() => {
                if (user.email) {
                  setColor(!colorHeart);
                } else {
                  Swal.fire({
                    icon: 'warning',
                    html: '<p>Tienes que iniciar sesión para que puedas dar ❤️.</p>',
                    timer: 1500,
                  });
                }
              }}
            />
          </div>
        </div>

        <div className="pl-5 pr-5 h-28">
          <h1 className="font-bold">Title</h1>
          <p className="h-full w-full overflow-clip">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non dolore
            vel temporibus
          </p>
        </div>
        <div className="pl-5 pr-5 pb-5 space-y-2">
          <a className="text-blue-600 pb-2 cursor-pointer font-semibold">
            ladygaga.com
          </a>
          <div className="flex">
            <IconPersonMini />
            <p>10.000.000 Votes</p>
          </div>
        </div>
      </div>
    </ColorHeartContext.Provider>
  );
};

export default Card; */
