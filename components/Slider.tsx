import { usePublications } from '@/lib/services/publications.services';
import { useRouter } from 'next/router';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Card from './Card';
import ButtonNext from './svgs/ButtonNext';

interface ISliderProps{
  title: string;
  subtitle: string;
}

const Slider: React.FC<ISliderProps> = ({title,subtitle}:ISliderProps) => {
  const [hidden, setHidden] = useState('hidden');
  const [hiddenTwo, setHiddenTwo] = useState('');
  const { data, error, isLoading } = usePublications();
  console.log(data?.rows);
  const router = useRouter();
  console.log(data);
  const {mutate} = usePublications();

  return (
    <div className="w-full m-auto md:w-10/12 lg:w-[1000px] xl:w-[970px] mt-10 font-roboto">
      {isLoading ? (<div className='text-4xl w-full h-screen m-auto'>Cargando...</div>) : (
      <div>  
        <div className="relative">
        <div className="w-full max-md:px-12 py-10">
          <h1 className="font-bold">{title}</h1>
          <h3 className="from-neutral-500 text-[#6E6A6C]">{subtitle}</h3>
        </div>
          <Swiper
            className="h-550 mb-12"
            // install Swiper modules
            modules={[]}
            spaceBetween={0}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
              },
              436: {
                slidesPerView: 1.4,
              },
              600: {
                slidesPerView: 2,
              },
              730: {
                slidesPerView: 2.2,
              },
              900: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            /* pagination={{ clickable: true }}
          scrollbar={{ draggable: true }} */
            /* onSwiper={(swiper) => console.log(swiper)} */
            onSlideChange={(swiper) => {
              if (swiper.isEnd) {
                setHidden('');
                setHiddenTwo('hidden');
              } else if (swiper.isBeginning) {
                setHidden('hidden');
                setHiddenTwo('');
              } else if (!swiper.isBeginning && !swiper.isEnd) {
                setHidden('');
                setHiddenTwo('');
              }
            }}
            style={{ position: 'unset' }}
          >
            <div
              id="arrow"
              className={`cursor-pointer absolute md:-left-14 lg:-left-20 top-[388px] z-30 transform -scale-x-100 max-md:hidden ${hidden}`}
            >
              <PrevButton />
            </div>
            {data.results.results.map(
              (pub: {
                user: any;
                id: string;
                description: string;
                title: string;
                image: string;
                votes_count: number;
                onClick: Function;
              }) => (
                <SwiperSlide key={pub.id}>
                  <Card
                    id={pub.id}
                    /* cardStyle="max-sm:ml-5 max-md:ml-18 max-lg:ml-16" */
                    cardStyle="m-auto"
                    fill="#D9D9D9"
                    image={pub.user.image_url}
                    title={pub.title}
                    description={pub.description}
                    votes={pub.votes_count}
                    redirect={() => router.push(`/event/${pub.id}`)}
                    mutate={mutate}
                  />
                </SwiperSlide>
              )
            )}

            <div
              id="arrow"
              className={`cursor-pointer absolute md:-right-12 lg:-right-20 top-[388px] z-30 max-md:hidden ${hiddenTwo}`}
            >
              <NextButton />
            </div>
          </Swiper>
        </div>
      </div>)}
      
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
