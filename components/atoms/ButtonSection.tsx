import React from 'react';

interface ButtonProps {
  name: string;
  style: string;
}

const ButtonSection: React.FC<ButtonProps> = ({name,style}:ButtonProps) => {
  return (
      <div style={{borderColor: '#A7A6A7'}} className={`${style} flex items-center bg-white text-[#A7A6A7] border rounded-full cursor-pointer`}>
        {name}
      </div>
   
  );
};

export default ButtonSection;