import React from 'react';

interface HeroProps {
  background: string;
  title: string;
  description: string;
}

const MiniHero: React.FC<HeroProps> = ({
  background,
  title,
  description,
}: HeroProps) => {
  return (
    <div
      style={{ boxShadow: '10px 10px 400px 0px rgba(0,0,0,0.40) inset' }}
      className={`w-full h-208 relative ${background} bg-cover`}
    >
      <div className="absolute top-5 flex flex-col justify-between ml-40 mr-40 h-28 max-sm:mr-10 max-md:ml-10 max-md:h-28 font-roboto">
        <h3 className="text-white">Ruta/ruta</h3>
        <div className="max-md:h-20">
          <h1 className="text-YELLOW font-extrabold text-5xl">{title}</h1>
          <h3 className="text-white">{description}</h3>
        </div>
      </div>
    </div>
  );
};

export default MiniHero;
