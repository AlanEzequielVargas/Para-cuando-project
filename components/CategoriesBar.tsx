import { useTags } from '@/lib/services/tags.services';
import ButtonSection from './atoms/ButtonSection';



const CategoriesBar = () => {

  const {data} = useTags();

  return (
    <div className="flex flex-col justify-between h-56 w-full m-auto md:w-10/12 lg:w-[1000px] xl:w-[970px]  bg-grey text-GRAY pl-10 pr-10 pt-4 pb-4 mb-28 max-md:w-full">
      <h1 className="text-grey2">!Hagámoslo más personal!</h1>
      <h3>
        Selecciona tus intereses para brindarte sugerencia de acuerdo a tus
        gustos
      </h3>
      <div className="scroll-container flex justify-evenly w-full h-16 max-sm:w-auto overflow-scroll pl-2">
        {data?.results.results.map((tag:any) => (
          
        <ButtonSection key={tag.id} name={tag.name} style="h-11 px-5 text-[12px]" />
        
          
        ))}
        
      </div>
      <a href="#" className="text-BLUE font-bold">
        Ver todos los intereses
      </a>
    </div>
  );
};

export default CategoriesBar;
