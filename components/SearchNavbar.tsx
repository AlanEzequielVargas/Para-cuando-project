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
          <ButtonSection name="Section" />
          <ButtonSection name="Section" />
          <ButtonSection name="Section" />
        </div>
        <div className="h-11 w-11 rounded-full sm:hidden" onClick={() => setShowMenu(!showMenu)}>
          <IconMenu />
        </div>

        <div className="max-sm:w-72 ">
          <Input />
        </div>
      </div>

      <div style={{display: !showMenu ? 'none' : ''}} className=" bg-white shadow-md absolute w-screen h-28 flex justify-evenly items-center sm:hidden">
        <ButtonSection name="Section" />
        <ButtonSection name="Section" />
        <ButtonSection name="Section" />
      </div>
    </div>
  );
};

export default SearchNavBar;
