import Image from 'next/image';

const MiniHero = () => {
  return (
    <div className="w-full">
      <Image
        src={'/assets/BrandsHero.png'}
        alt=""
        width={100}
        height={100}
        className="w-full h-208 relative"
      />
      <div className="absolute top-24 flex flex-col justify-between ml-40 mr-40 h-28 max-sm:mr-10 max-sm:ml-10 max-md:h-28">
        <h3 className="text-white">Ruta/ruta</h3>
        <div className="max-md:h-20">
          <h1 className="text-YELLOW font-extrabold text-5xl">Titulo</h1>
          <h3 className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae, dolores saepe assumenda molestias.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MiniHero;
