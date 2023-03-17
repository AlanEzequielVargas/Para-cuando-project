import React from 'react';
import IconMagnifyingGlass from '../svgs/IconMagnifyingGlass';

const Input: React.FC = () => {
  return (
    <div className='relative font-roboto'>
      <input type="text" placeholder='¿Qué quieres ver en tu ciudad?' className='from-neutral-900 pl-5 w-full rounded-full h-12 border'/>
      <IconMagnifyingGlass/>
    </div>
);
};

export default Input;



