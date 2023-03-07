import React from 'react';
interface IIconHeart {
  fill: string
}

const IconHeart: React.FC<IIconHeart> = ({fill}:IIconHeart) => {
  return (
    <svg
      width="49"
      height="49"
      viewBox="0 0 49 49"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      className='cursor-pointer absolute'
    >
      <circle
        cx="24.5"
        cy="24.5"
        r="23.5"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M18.15 14C14.2013 14 11 17.1565 11 21.0501C11 28.1001 19.45 34.5092 24 36C28.55 34.5092 37 28.1001 37 21.0501C37 17.1565 33.7987 14 29.85 14C27.432 14 25.2935 15.1838 24 16.9956C23.3407 16.0696 22.4648 15.3139 21.4465 14.7925C20.4282 14.271 19.2974 13.9992 18.15 14Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconHeart;

/* import React, { useContext } from 'react';
import { ColorHeartContext } from '../../components/Card';

interface IIconHeart {
  fill: string
}


const IconHeart: React.FC<IIconHeart> = ({ ...svgProps }) => {
  const colorHeartChange = useContext(ColorHeartContext);


  return (
    <svg
      width="49"
      height="49"
      viewBox="0 0 49 49"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      className='cursor-pointer absolute'
    >
      <circle
        cx="24.5"
        cy="24.5"
        r="23.5"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M18.15 14C14.2013 14 11 17.1565 11 21.0501C11 28.1001 19.45 34.5092 24 36C28.55 34.5092 37 28.1001 37 21.0501C37 17.1565 33.7987 14 29.85 14C27.432 14 25.2935 15.1838 24 16.9956C23.3407 16.0696 22.4648 15.3139 21.4465 14.7925C20.4282 14.271 19.2974 13.9992 18.15 14Z"
        stroke={colorHeartChange ? 'white' : 'red'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconHeart;
 */