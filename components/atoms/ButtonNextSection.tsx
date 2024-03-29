import { usePublications, usePublicationsByQuery } from '@/lib/services/publications.services';
import { RootState } from '@/store/store';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface IButtonProps {
  name: string;
}

const ButtonNextSection : React.FC<IButtonProps> = ({name}: IButtonProps) => {


  return (
    <div style={{backgroundColor: '#1B4DB1'}} className='text-white h-11 pl-10 pr-10 rounded-3xl border flex justify-center items-center cursor-pointer font-roboto'>
      {name}
  </div>
   
  );
};

export default ButtonNextSection;