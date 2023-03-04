import React from 'react';

interface ButtonProps {
  name: string
}

const ButtonAction: React.FC<ButtonProps> = ({name}:ButtonProps) => {
  
  return (
    
    <div style={{backgroundColor: '#1B4DB1'}} className='text-white h-11 pl-5 pr-5 rounded-3xl border flex justify-center items-center cursor-pointer'>
      {name}
  </div>
  );
};

export default ButtonAction;