import { usePublications } from '@/lib/services/publications.services';
import { useRouter } from 'next/router';
import { Key, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Card from './Card';
import ButtonNext from './svgs/ButtonNext';

interface Pub {
  id: string;
  image: string;
}

interface Data {
  rows: Pub[];
}

interface Props {
  data: Data | null | undefined;
}

const Slider = () => {
  const [hidden, setHidden] = useState('hidden');
  const [hiddenTwo, setHiddenTwo] = useState('');
  const { data, error, isLoading } = usePublications();
  console.log(data?.rows);
  const router = useRouter();

  return (
    <div className="w-full m-auto lg:w-10/12 xl:w-8/12 mt-10 font-roboto">
      <div>
        <div className="w-10/12 lg:w-full m-auto">
          <h1 className="font-bold">Title 1</h1>
          <h3 className="from-neutral-500">Subtitle 2</h3>
        </div>
        <div className="relative">
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
                slidesPerView: 1.8,
              },
              730: {
                slidesPerView: 2.3,
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
              className={`cursor-pointer absolute lg:-left-20 top-60 z-30 transform -scale-x-100 max-lg:hidden ${hidden}`}
            >
              <PrevButton />
            </div>
            {data?.rows.map(
              (pub: {
                id: Key | null | undefined;
                description: string;
                title: string;
                image: string;
                votes_count: number;
                onClick: Function;
              }) => (
                <SwiperSlide key={pub.id}>
                  <Card
                    cardStyle="max-sm:ml-5 max-md:ml-18 max-lg:ml-16"
                    fill="#D9D9D9"
                    image={pub.image}
                    title={pub.title}
                    description={pub.description}
                    votes={pub.votes_count}
                    onClick={() => router.push(`/event/${pub.id}`)}
                  />
                </SwiperSlide>
              )
            )}

            <div
              id="arrow"
              className={`cursor-pointer absolute lg:-right-20 top-60 z-30 max-lg:hidden ${hiddenTwo}`}
            >
              <NextButton />
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
