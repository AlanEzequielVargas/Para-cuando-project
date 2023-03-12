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
      <div className="w-11/12 lg:w-8/12 mt-6 flex justify-between">
        <Input />
        <ButtonNextSection name='Buscar'/>
      </div>

      <nav className="w-full">
        <ul className="flex justify-around mt-4 lg:w-9/12 m-auto">
          <li className="pb-2 mt-2 border-b-4 border-white border-solid hover:border-b-4 hover:border-[#1B4DB1]">
            Todos los resultados
          </li>
          <li className="pb-2 mt-2 border-b-4 border-white border-solid hover:border-b-4 hover:border-[#1B4DB1]">
            Marcas y tiendas
          </li>
          <li className="pb-2 mt-2 border-b-4 border-white border-solid hover:border-b-4 hover:border-[#1B4DB1] max-lg:hidden">
            Artistas y conciertos
          </li>
          <li className="pb-2 mt-2 border-b-4 border-white border-solid hover:border-b-4 hover:border-[#1B4DB1] max-lg:hidden">
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
                className={`w-[174px] h-[106px] absolute right-[0px] top-[60px] shadow-md flex flex-col justify-evenly px-2`}
              >
                <li className="">Artistas y conciertos</li>
                <li className="">Torneos</li>
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
