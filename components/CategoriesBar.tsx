import ButtonSection from './atoms/ButtonSection';

const CategoriesBar = () => {
  return (
    <div className="flex flex-col justify-between h-56 w-full m-auto md:w-10/12 lg:w-[1000px] xl:w-[970px]  bg-grey text-GRAY pl-10 pr-10 pt-4 pb-4 mb-28 max-md:w-full">
      <h1 className="text-grey2">!Hagámoslo más personal!</h1>
      <h3>
        Selecciona tus intereses para brindarte sugerencia de acuerdo a tus
        gustos
      </h3>
      <div className="flex justify-evenly w-380 max-sm:w-auto">
        <ButtonSection name="Category" style="h-11 px-5" />
        <ButtonSection name="Category" style="h-11 px-5" />
        <ButtonSection name="Category" style="h-11 px-5" />
      </div>
      <a href="#" className="text-BLUE font-bold">
        Ver todos los intereses
      </a>
    </div>
  );
};

export default CategoriesBar;
