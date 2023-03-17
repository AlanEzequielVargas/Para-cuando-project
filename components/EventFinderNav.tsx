import { toggleinputValue } from '@/slices/inputValueSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ButtonNextSection from './atoms/ButtonNextSection';
import Input from './atoms/Input';

const EventFinderNav = () => {
  const [showList, setShowList] = useState(false);
  const dispatch = useDispatch()
  return (
    <div
      id="white-navbar"
      className="h-[140px] shadow-md flex items-center text-[#6E6A6C] font-roboto"
    >
      <div className="min-w-[340px] w-10/12 max-w-[1000px] md:flex md:justify-start m-auto">
        <div className="min-w-[340px] w-full md:w-[600px] lg:w-[700px] ">
          <div className=" mt-6 flex md:gap-x-5 items-center">
            <div className="w-full ">
              <Input />
            </div>
            <div className="max-md:hidden">
              <ButtonNextSection name="Buscar" />
            </div>
          </div>

          <nav className="w-full ">
            <ul className="flex justify-between mt-6 ">
              <li className="cursor-pointer pb-2 mt-2 border-b-4 border-white border-solid hover:border-b-4 hover:border-[#1B4DB1]" onClick={() => {dispatch(toggleinputValue(""))
            
            }}>
                Todos los resultados
              </li>
              <li className="cursor-pointer pb-2 mt-2 border-b-4 border-white border-solid hover:border-b-4 hover:border-[#1B4DB1]">
                Marcas y tiendas
              </li>
              <li className="cursor-pointer pb-2 mt-2 border-b-4 border-white border-solid hover:border-b-4 hover:border-[#1B4DB1] max-md:hidden">
                Artistas y conciertos
              </li>
              <li className="cursor-pointer pb-2 mt-2 border-b-4 border-white border-solid hover:border-b-4 hover:border-[#1B4DB1] max-md:hidden">
                Torneos
              </li>
              <div className="relative md:hidden">
                <li
                  className="pb-2 mt-2 border-b-4 border-white border-solid hover:border-b-4 hover:border-[#1B4DB1] font-extrabold lg:hidden"
                  onClick={() => setShowList(!showList)}
                >
                  . . .
                </li>

                {showList ? (
                  <ul
                    className={`w-[174px] h-[106px] absolute right-[0px] top-[60px] shadow-md flex flex-col  px-2 z-20 bg-white `}
                  >
                    <li className="" onClick={() => setShowList(!showList)}>
                      Artistas y conciertos
                    </li>
                    <li className="" onClick={() => setShowList(!showList)}>
                      Torneos
                    </li>
                  </ul>
                ) : (
                  <></>
                )}
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default EventFinderNav;
