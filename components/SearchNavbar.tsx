import { useRouter } from 'next/router';
import { useState } from 'react';
import ButtonSection from './atoms/ButtonSection';
import Input from './atoms/Input';
import IconMenu from './svgs/IconMenu';

const SearchNavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  return (
    <div className="relative font-roboto z-20">
      <div
        id="white-navbar"
        className="h-24 flex justify-evenly items-center shadow-md max-sm:justify-evenly"
      >
        <div style={{borderColor: '#A7A6A7'}} className="w-96 flex justify-evenly max-sm:hidden 
text-[#A7A6A7]">
          <div onClick={() => router.push('/brands')}>
            <ButtonSection
              name="Marcas y tiendas"
              style="h-11 w-62 text-[10px] md:text-xs px-5"
            />
          </div>
          <div onClick={() => router.push('/artists')}>
            <ButtonSection
              name="Artistas y conciertos"
              style="h-11 w-62 text-[10px] md:text-xs px-5"
            />
          </div>
          <div onClick={() => router.push('/tournaments')}>
            <ButtonSection
              name="Torneos"
              style="h-11 w-62 text-[10px] md:text-xs px-5"
            />
          </div>
        </div>
        <div
          className="h-11 w-11 rounded-full sm:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          <IconMenu />
        </div>

        <div className="relative w-[300px]">
          <Input />
        </div>
      </div>

      <div
        style={{ display: !showMenu ? 'none' : '' }}
        className=" bg-white shadow-md absolute w-screen h-28 flex justify-evenly items-center sm:hidden"
      >
        <div onClick={() => router.push('/brands')}>
          <ButtonSection
            name="Marcas y tiendas"
            style="h-11 px-5 text-[10px]"
          />
        </div>
        <div onClick={() => router.push('/artists')}>
          <ButtonSection
            name="Artistas y conciertos"
            style="h-11 px-5 text-[10px]"
          />
        </div>

        <div onClick={() => router.push('/tournaments')}>
          <ButtonSection name="Torneos" style="h-11 px-5 text-[10px]" />
        </div>
      </div>
    </div>
  );
};

export default SearchNavBar;
