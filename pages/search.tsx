import React from 'react';
import Layout from '@/components/Layout';
import EventFinderNav from '@/components/EventFinderNav';
import { usePublications } from '@/lib/services/publications.services';


const Search = () => {
  const {data} = usePublications()
  console.log(data)

  return (
    <Layout>
      <div className='h-screen'>
          <div className="relative h-[108px] bg-[url('/assets/heros/default-hero.jpg')] bg-cover bg-center">
          </div>
          
          <EventFinderNav/>
          
            
      </div>

    </Layout>
  );
};

export default Search;