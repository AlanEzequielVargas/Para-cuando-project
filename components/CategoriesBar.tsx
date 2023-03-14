import { useTags } from '@/lib/services/tags.services';
import ButtonSection from './atoms/ButtonSection';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Link from 'next/link';


const CategoriesBar = () => {

  const {data} = useTags();

  return (
    <div className="flex flex-col justify-between h-56 w-full m-auto md:w-10/12 lg:w-[1000px] xl:w-[970px]  bg-grey text-[#6E6A6C] pl-10 pr-10 pt-4 pb-4 mb-28 max-md:w-full  font-roboto">
      <h1 className="font-semibold">!Hagámoslo más personal!</h1>
      <h3 className="text-[19px]">
        Selecciona tus intereses para brindarte sugerencia de acuerdo a tus
        gustos
      </h3>
      <div className="scroll-container flex justify-evenly w-full h-16 max-sm:w-auto overflow-scroll pl-2">
        
         <Swiper
      spaceBetween={50}
      slidesPerView={3}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}

      breakpoints={{
        0: {
          slidesPerView: 2.8,
        },
        436: {
          slidesPerView: 3.8,
        },
        600: {
          slidesPerView: 4.8,
        },
        730: {
          slidesPerView: 5.8,
        },
        900: {
          slidesPerView: 6.8,
        },
        1200: {
          slidesPerView: 6.8,
        },
      }}
    >
      {data?.results.results.map((tag:any) => (
          
          <SwiperSlide key={tag.id}><ButtonSection name={tag.name} style="h-11 px-5 w-[120px] text-center text-[12px]" /></SwiperSlide>
          
            
          ))}
      
      
      
    </Swiper>
        
      </div>
      <Link href="/profileSettings" className="text-BLUE font-bold">
        Ver todos los intereses
      </Link>
    </div>
  );
};

export default CategoriesBar;
