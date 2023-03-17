import ArtistInfo from '@/components/ArtistInfo';
import CategoriesBar from '@/components/CategoriesBar';
import Layout from '@/components/Layout';
import SearchNavBar from '@/components/SearchNavbar';
import Slider from '@/components/Slider';
import { usePublicationDetails } from '@/lib/services/details.services';
import { usePublications } from '@/lib/services/publications.services';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { PropagateLoader } from 'react-spinners';

export default function Event() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading ,mutate } = usePublicationDetails(String(id));
  const imagePublication = usePublications().data?.results.results.filter(
    (pub: any) => pub.id === id
  );

  return (
    <Layout>
      <>
      {error ? (
        <div className="relative w-full h-screen flex flex-col justify-center items-center">
        <h1 className='text-4xl'>Ocurrió un error... 😰</h1>
        <Image src="/assets/error-guy-image.gif" width={300} height={300} alt="error-image" priority className='absolute -bottom-2'/>
      </div>
      ) : isLoading ? (
        <div className="w-screen h-screen flex justify-center items-center text-4xl">
          <PropagateLoader color="#000000" />
        </div>
      ) : (<>
          <SearchNavBar />
          <div style={{ maxWidth: '1000px' }} className="md:w-11/12 m-auto">
            <ArtistInfo
              id={data.id}
              image={imagePublication[0]?.images[0]?.image_url}
              title={data.title}
              description={data.description}
              votes={data.votes_count}
              content={data.content}
              referenceLink={data.reference_link}
              mutate={mutate}
            />
            <CategoriesBar />
            <Slider
              title="Recientes"
              subtitle="Las personas últimanete están hablando de esto"
            />
          </div>
        </>
        )}</>
    </Layout>
  );
}
