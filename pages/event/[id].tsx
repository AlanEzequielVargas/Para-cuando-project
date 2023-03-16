import ArtistInfo from '@/components/ArtistInfo';
import CategoriesBar from '@/components/CategoriesBar';
import Layout from '@/components/Layout';
import SearchNavBar from '@/components/SearchNavbar';
import Slider from '@/components/Slider';
import { usePublicationDetails } from '@/lib/services/details.services';
import { useRouter } from 'next/router';

export default function Event() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = usePublicationDetails(String(id));
  console.log(data);

  return (
    <Layout>
      {isLoading ? (
        <div className="h-screen w-auto  text-5xl flex justify-center items-center">
          Cargando...
        </div>
      ) : error ? (
        <div className="h-screen w-auto bg-black text-white font-bold flex justify-center items-center">
          {error.message}
        </div>
      ) : (
        <>
          <SearchNavBar />
          <div style={{ maxWidth: '1000px' }} className=" md:w-11/12 m-auto">
            <ArtistInfo
              id={data.id}
              image={''}
              title={data.title}
              description={data.description}
              votes={data.votes_count}
              content={data.content}
            />
            <CategoriesBar />
            <Slider
              title="Recientes"
              subtitle="Las personas últimanete están hablando de esto"
            />
          </div>
        </>
      )}
    </Layout>
  );
}
