import React from 'react';

interface ButtonProps {
  name: string
}

const ButtonSection: React.FC<ButtonProps> = ({name}:ButtonProps) => {
  return (
      <div className='flex items-center bg-white text-gray-500 border-gray-500 h-7 rounded-2xl px-4 cursor-pointer'>
        {name}
      </div>
   
  );
};

export default ButtonSection;