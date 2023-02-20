import Image from 'next/image';
import React from 'react';/* 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { findIconDefinition, IconDefinition, IconLookup } from '@fortawesome/fontawesome-svg-core'; */

/* interface Props {
  icon: IconDefinition;
} */

/* const cofferLookup: IconLookup = { prefix: "fa-solid", iconName: "fa-coffee"}
const coffeeIconDefinition: IconDefinition = findIconDefinition(coffeeLookup) */

const Header = (/* { icon }: Props */) => {
  return (
    <div className="flex justify-center bg-black">
      <div className="container flex flex-row justify-between items-center pl-5 pr-5">
        <Image
          src="https://drive.google.com/file/d/1z8AS1vpCglN7HZegLQa04ZFqQT_XOuHH/view"
          alt="logo-para-cuando"
          width={50}
          height={50}
        />
        <div className='flex flex-row text-white text-sm'>
          <p className='text-blue-600'>{/* <FontAwesomeIcon icon={icon.fin}/> */} Crear publicación</p>
          <p className='px-5'>Log In</p>
          <p>Sign Up</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
