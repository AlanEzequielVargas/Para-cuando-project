import React from 'react';

interface ButtonProps {
  name: string
  height: string
  
}

const ButtonSection: React.FC<ButtonProps> = ({name,height}:ButtonProps) => {

  
  return (
    <button className={`flex items-center ${height} whitespace-nowrap px-2 py-2 bg-white border sm:px-8 rounded-full text-GRAY  border-GRAY w-full `}>
    {name}
  </button>
   
  );
};

export default ButtonSection;