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

interface ISliderProps {
  title: string;
  subtitle: string;
}

const Slider: React.FC<ISliderProps> = ({ title, subtitle }: ISliderProps) => {
  const [hidden, setHidden] = useState('hidden');
  const [hiddenTwo, setHiddenTwo] = useState('');
  const { data, isLoading } = usePublications();

  const router = useRouter();

  const { mutate } = usePublications();

  return (
    <div className="w-full m-auto mt-10 font-roboto">
      {isLoading ? (
        <div className="text-4xl w-full h-screen m-auto">Cargando...</div>
      ) : (
        <div>
          <div className="relative">
            <div className="max-md:ml-[20px] sm:pb-6">
              <h1 className="font-bold text-[20px] sm:text-[25px]">{title}</h1>
              <h3 className="text-[#6E6A6C] text-[15px] sm:text-[19px]">
                {subtitle}
              </h3>
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
                919: {
                  slidesPerView: 2.5,
                },
                1084: {
                  slidesPerView: 3,
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
                className={`cursor-pointer absolute md:-left-14 lg:-left-20 top-[300px] z-30 transform -scale-x-100 max-md:hidden ${hidden}`}
              >
                <PrevButton />
              </div>
              {data?.results.results.map(
                (pub: {
                  reference_link: string;
                  user: any;
                  id: string;
                  description: string;
                  title: string;
                  images: Array<any>;
                  image_url: any;
                  votes_count: number;
                  onClick: Function;
                }) => (
                  <SwiperSlide key={pub.id}>
                    <Card
                      id={pub.id}
                      /* cardStyle="max-sm:ml-5 max-md:ml-18 max-lg:ml-16" */
                      cardStyle="m-auto"
                      
                      image={pub.images[0]?.image_url}
                      title={pub?.title}
                      description={pub.description}
                      votes={pub.votes_count}
                      redirect={() => router.push(`/event/${pub.id}`)}
                      mutate={mutate}
                      referenceLink={pub.reference_link}
                    />
                  </SwiperSlide>
                )
              )}

              <div
                id="arrow"
                className={`cursor-pointer absolute md:-right-16 lg:-right-20 top-[300px] z-30 max-lg:hidden ${hiddenTwo}`}
              >
                <NextButton />
              </div>
            </Swiper>
          </div>
        </div>
      )}
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
