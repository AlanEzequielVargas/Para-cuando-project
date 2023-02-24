// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from './Card';

const Slider = () => {
  return (
    <div className="">
      <div>
        <div className="pl-0.5">
          <h1 className="font-bold">Title 1</h1>
          <h3 className="from-neutral-500">Subtitle 2</h3>
        </div>
        <Swiper
          className="h-auto overflow-scroll sm:flex-wrap"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className=''>
            <Card />
          </SwiperSlide>
          <SwiperSlide className=''>
            <Card />
          </SwiperSlide>
          <SwiperSlide className=''>
            <Card />
          </SwiperSlide>
          <SwiperSlide className=''>
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
