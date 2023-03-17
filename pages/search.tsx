import React from 'react';
import Layout from '@/components/Layout';
import EventFinderNav from '@/components/EventFinderNav';
import { usePublications } from '@/lib/services/publications.services';
import Slider from '@/components/Slider';
import CardFromFinderPage from '@/components/CardFromFinderPage';
import { useRouter } from 'next/router';

const Search = () => {
  const { data, error, isLoading, mutate } = usePublications();

  const router = useRouter();

  return (
    <Layout>
      <div className="h-auto">
        <div className="relative h-[108px] bg-[url('/assets/heros/default-hero.jpg')] bg-cover bg-center"></div>

        <EventFinderNav />
        <div className="md:w-10/12 lg:w-[1000px] m-auto">
          <div className="mt-20">
            {data?.results.results.map(
              (pub: {
                id: string;
                description: string;
                title: string;
                images: Array<any>;
                image_url: string;
                votes_count: number;
                onClick: Function;
                reference_link: string;
              }) => (
                <div key={pub.id}>
                  <CardFromFinderPage
                    id={pub.id}
                    /* cardStyle="max-sm:ml-5 max-md:ml-18 max-lg:ml-16" */
                    cardStyle="m-auto"
                    fill="#D9D9D9"
                    image={pub.images[0]?.image_url}
                    title={pub.title}
                    description={pub.description}
                    votes={pub.votes_count}
                    redirect={() => router.push(`/event/${pub.id}`)}
                    mutate={mutate}
                    referenceLink={pub.reference_link}
                  />
                </div>
              )
            )}
          </div>
          <div className="w-full m-auto flex justify-center">PAGINATION</div>
          <div className="mt-20">
            <Slider
              title="Recientes"
              subtitle="Las personas últimanete están hablando de esto"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
