import { useState } from 'react';
import ButtonSection from './atoms/ButtonSection';
import Input from './atoms/Input';
import IconMenu from './svgs/IconMenu';

const SearchNavBar = () => {

  const [showMenu , setShowMenu] = useState(false)

  return (
    <div className="relative">
      <div
        id="white-navbar"
        className="h-24 flex justify-evenly items-center shadow-md max-sm:justify-evenly"
      >
        <div className="w-96 flex justify-evenly max-sm:hidden">
          <ButtonSection name="Section" style='h-11 px-5'/>
          <ButtonSection name="Section" style='h-11 px-5'/>
          <ButtonSection name="Section" style='h-11 px-5'/>
        </div>
        <div className="h-11 w-11 rounded-full sm:hidden" onClick={() => setShowMenu(!showMenu)}>
          <IconMenu />
        </div>

        <div className="relative w-[300px]">
          <Input />
        </div>
      </div>

      <div style={{display: !showMenu ? 'none' : ''}} className=" bg-white shadow-md absolute w-screen h-28 flex justify-evenly items-center sm:hidden">
        <ButtonSection name="Section" style='h-11 px-5'/>
        <ButtonSection name="Section" style='h-11 px-5'/>
        <ButtonSection name="Section" style='h-11 px-5'/>
      </div>
    </div>
  );
};

export default SearchNavBar;
