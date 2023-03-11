import React from 'react';


interface ButtonProps {
  isVoted : boolean;
}

const ButtonVote: React.FC<ButtonProps> = ({isVoted}:ButtonProps) => {

  return (
    
    <div style={{backgroundColor: isVoted ? '#FF64BC' : '#1B4DB1'}} className='text-white h-11 pl-5 pr-5 rounded-3xl border flex justify-center items-center cursor-pointer' >
      {isVoted ? 'Retirar mi voto' : 'Votar'}
  </div>
  );
};

export default ButtonVote;