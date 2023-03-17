import { toggleinputValue } from '@/slices/inputValueSlice';
import { RootState } from '@/store/store';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconMagnifyingGlass from '../svgs/IconMagnifyingGlass';

const Input: React.FC = () => {
const router = useRouter();  
const dispatch = useDispatch();
const [nose ,setNose] = useState('');



  return (
    <div className='relative font-roboto'>
      <input type="text" placeholder='¿Qué quieres ver en tu ciudad?' className='from-neutral-900 pl-5 w-full rounded-full h-12 border' onChange={(e) => setNose(e.target.value)} onKeyDown={(e) => {
        if(e.keyCode === 13){
          dispatch(toggleinputValue(nose))
          router.push('/search')
        }
      }}
      />
      <IconMagnifyingGlass/>
    </div>
);
};

export default Input;



