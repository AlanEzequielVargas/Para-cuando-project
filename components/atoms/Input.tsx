import React from 'react';

const Input: React.FC = () => {
  return (
    <div className="relative">
            <input
              className="h-11 max-sm:w-80 sm:w-96 pl-4 pr-12 rounded-3xl mt-7 text-black"
              type="search"
              name=""
              id=""
              placeholder="¿Qué quieres ver en tu ciudad?"
            />
            <div className="absolute bottom-[12%] right-[5%]  flex items-center pl-3 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
  );
};

export default Input;


