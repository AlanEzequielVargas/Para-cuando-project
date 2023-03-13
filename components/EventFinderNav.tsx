import { useState } from 'react';
import ButtonNextSection from './atoms/ButtonNextSection';
import ButtonSection from './atoms/ButtonSection';
import Input from './atoms/Input';

const EventFinderNav = () => {
  const [showList, setShowList] = useState(false);

  return (
    <div
      id="white-navbar"
      className="h-[140px] shadow-md flex flex-col justify-around items-center text-[#6E6A6C] font-roboto"
    >
      <div className="w-11/12 lg:w-9/12 mt-6 flex justify-center lg:justify-start lg:gap-x-5 items-center">
        <div className='w-full md:w-11/12 lg:w-6/12 '>
          <Input />
        </div>
        <div className='max-lg:hidden'>
          <ButtonNextSection name='Buscar'/>
        </div>
        
        
      </div>

      <nav className="w-full lg:w-9/12">
        <ul className="flex justify-around mt-4 lg:w-7/12 lg:justify-between">
          <li className="cursor-pointer pb-2 mt-2 border-b-4 border-white border-solid hover:border-b-4 hover:border-[#1B4DB1] ">
            Todos los resultados
          </li>
          <li className="cursor-pointer pb-2 mt-2 border-b-4 border-white border-solid hover:border-b-4 hover:border-[#1B4DB1]">
            Marcas y tiendas
          </li>
          <li className="cursor-pointer pb-2 mt-2 border-b-4 border-white border-solid hover:border-b-4 hover:border-[#1B4DB1] max-lg:hidden">
            Artistas y conciertos
          </li>
          <li className="cursor-pointer pb-2 mt-2 border-b-4 border-white border-solid hover:border-b-4 hover:border-[#1B4DB1] max-lg:hidden">
            Torneos
          </li>
          <div className="relative lg:hidden">
            <li
              className="pb-2 mt-2 border-b-4 border-white border-solid hover:border-b-4 hover:border-[#1B4DB1] font-extrabold lg:hidden"
              onClick={() => setShowList(!showList)}
            >
              . . .
            </li>

            {showList ? (
              <ul
                className={`w-[174px] h-[106px] absolute right-[0px] top-[60px] shadow-md flex flex-col justify-evenly px-2 z-20 bg-white `}
              >
                <li className="" onClick={() => setShowList(!showList)}>Artistas y conciertos</li>
                <li className="" onClick={() => setShowList(!showList)}>Torneos</li>
              </ul>
            ) : (
              <></>
            )}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default EventFinderNav;
