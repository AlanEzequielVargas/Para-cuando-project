import React from 'react';

interface ButtonProps {
  name: string;
  style: string;
}

const ButtonSection: React.FC<ButtonProps> = ({name,style}:ButtonProps) => {
  return (
      <div className={`${style} flex items-center bg-white text-gray-500 border rounded-full cursor-pointer`}>
        {name}
      </div>
   
  );
};

export default ButtonSection;