import { getProfile } from '@/lib/services/auth.services';
import { popUpLoginClose } from '@/slices/popUpLoginSlice';
import { RootState } from '@/store/store';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import arrowBack from '../public/arrow-back.svg';
import iconHeart from '../public/assets/icon-heart-pink.svg';
import iconLogout from '../public/assets/icon-logout.svg';
import iconSetting from '../public/assets/icon-setting.svg';
import iconUser from '../public/icon-user.svg';
import LogoPC from './svgs/LogoPC';

const Header = () => {
  const router = useRouter();

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const isLogged = useSelector((state: RootState) => state.popUpLogin.value);

  const dispatch = useDispatch();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const {data} = getProfile();

  console.log(data);
  

  return (
    <div className={`${isLogged ? 'bg-[#1A1E2E]' : 'bg-black'} h-16 m-auto`}>
      <div className="flex flex-row justify-between items-center px-5 py-4">
        <LogoPC/>
        {isLogged ? (
          <div className="flex flex-row gap-9">
            <div className="hidden sm:flex flex-row items-center text-white text-sm gap-9">
              <button
                className="flex items-center"
                onClick={() => router.push('/post')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-blue-600 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
                <p className="text-blue-600">Crear publicación</p>
              </button>
              <button className="hidden sm:flex flex-row items-center text-white text-sm ">
                <Image
                  src={iconHeart}
                  alt="icon-heart"
                  width={20}
                  height={20}
                  className="w-auto h-auto"
                />
                <p className="ml-2" onClick={() => {console.log('hola');
                     router.push('/profile')}}>Mis votos</p>
              </button>
            </div>

            <div className="flex-col flex text-gray-800 relative">
              <button
                className="flex-row flex items-center text-white"
                onClick={toggleMenu}
              >
                <Image
                  src={iconUser}
                  width={34}
                  height={34}
                  alt="icon-user"
                  className="w-auto h-auto"
                />
                <h3 className="ml-2 mr-5">{data?.results.username}</h3>
                <Image
                  src={arrowBack}
                  width={10}
                  height={10}
                  alt="icon-arrow-back"
                  className="w-auto h-auto"
                />
              </button>

              <div
                className={`bg-white rounded-xl absolute w-full top-12 z-10 transition-all duration-500 ease-in-out ${
                  showMenu ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <ul className="flex flex-col justify-center items-center py-2">
                  <div className="flex flex-col jutify-center items-start text-black gap-2 p-1 mb-2">
                    <li
                      className="sm:hidden flex flex-row justify-center items-center cursor-pointer hover:text-blue-500"
                      onClick={() => router.push('/post')}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-blue-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                      Crear publicación
                    </li>
                    <li className="sm:hidden flex flex-row justify-center items-center cursor-pointer hover:text-blue-500" >
                      <Image
                        src={iconHeart}
                        alt="icon-heart"
                        width={15}
                        height={15}
                        className="mx-1 w-auto h-auto"
                        
                      />
                      Mis votos
                    </li>
                    <li className="flex flex-row justify-center items-center cursor-pointer hover:text-blue-500" onClick={() => router.push('/profileSettings')}>
                      <Image
                        src={iconSetting}
                        alt="icon-setting"
                        width={14}
                        height={14}
                        className="mx-1 w-auto h-auto"
                      />
                      Configuración
                    </li>
                    <li
                      className="flex flex-row justify-center items-center cursor-pointer hover:text-blue-500"
                      onClick={async () => {
                        Cookies.remove('token')
                        toggleMenu(); // cierra el menú
                        await new Promise(() => {
                          dispatch(popUpLoginClose()); // cierra la sesión
                          router.push('/'); // redirige a la página principal
                        }); // espera 500ms (o el tiempo necesario para que el menú se cierre completamente)
                      }}
                    >
                      <Image
                        src={iconLogout}
                        alt="icon-setting"
                        width={14}
                        height={14}
                        className="mx-1 w-auto h-auto"
                      />
                      Cerrar sesión
                    </li>
                  </div>
                  <li className="w-3/4 bg-gray-300 h-[1px]"></li>
                  <li className="text-gray-500 -ml-4 cursor-pointer hover:text-blue-500 text-sm my-2">
                    Ayuda y soporte
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-row items-center text-white text-sm sm:gap-9 gap-4">
            <button
              className="flex items-center"
              onClick={() => router.push('/post')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-blue-600 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
              <p className="text-blue-600">Crear publicación</p>
            </button>
            <p className="cursor-pointer" onClick={() => router.push('/login')}>
              Log In
            </p>
            <p
              className="cursor-pointer"
              onClick={() => router.push('/signup')}
            >
              Sign Up
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
