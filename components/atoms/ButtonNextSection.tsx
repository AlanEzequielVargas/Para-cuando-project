import React from 'react';

interface IButtonProps {
  name: string;
}

const ButtonNextSection : React.FC<IButtonProps> = ({name}: IButtonProps) => {
  return (
    <div style={{backgroundColor: '#1B4DB1'}} className='text-white h-11 pl-5 pr-5 rounded-3xl border flex justify-center items-center cursor-pointer font-roboto'>
      {name}
  </div>
   
  );
};

export default ButtonNextSection;