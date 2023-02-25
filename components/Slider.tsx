import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from './Card';
import ButtonNext from './svgs/ButtonNext';

const Slider = () => {

  return (
    <div className="w-full m-auto lg:w-11/12 mt-10">
      <div>
        <div className="pl-0.5 max-lg:pl-10">
          <h1 className="font-bold">Title 1</h1>
          <h3 className="from-neutral-500">Subtitle 2</h3>
        </div>
        <div className="relative">
          <Swiper
            className="h-550 max-sm:overflow-scroll max-sm:flex-wrap mb-12"
            // install Swiper modules
            modules={[]}
            spaceBetween={0}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
              },
              376: {
                slidesPerView: 1.2,
              },
              600: {
                slidesPerView: 1.5,
              },
              900: {
                slidesPerView: 2.5,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            /* pagination={{ clickable: true }}
          scrollbar={{ draggable: true }} */
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            style={{ position: 'unset' }}
          >
            <div id='arrow' className='absolute left-0 top-60 z-30 transform -scale-x-100 max-lg:hidden'>
              <PrevButton/>
            </div>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <div id='arrow' className='absolute right-0 top-60 z-30 max-lg:hidden'>
              <NextButton/>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const NextButton = () => {
  const swiper = useSwiper();
  return <ButtonNext onClick={() => swiper.slideNext()} />;
};

const PrevButton = () => {
  const swiper = useSwiper();
  return <ButtonNext onClick={() => swiper.slidePrev()} />;
};

export default Slider;
