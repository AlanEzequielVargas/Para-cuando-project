import React from 'react';

interface ButtonProps {
  name: string
}

const ButtonSection: React.FC<ButtonProps> = ({name}:ButtonProps) => {
  return (
      <div style={{backgroundColor: 'white'}} className='h-11 pl-5 pr-5 rounded-3xl border text-gray-500 bg-white flex justify-center items-center cursor-pointer'>
        {name}
      </div>
   
  );
};

export default ButtonSection;