import React from 'react';

interface IButtonAdd extends React.ComponentPropsWithoutRef<'svg'> {}

const ButtonAdd: React.FC<IButtonAdd> = ({ ...svgProps }) => {
  return (
    <svg
      width="220"
      height="206"
      viewBox="0 0 220 206"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <rect width="220" height="206" rx="15" fill="#D9D9D9" />
      <path
        d="M118 104.143H111.143V111H108.857V104.143H102V101.857H108.857V95H111.143V101.857H118V104.143Z"
        fill="#1B4DB1"
      />
    </svg>
  );
};

export default ButtonAdd;
