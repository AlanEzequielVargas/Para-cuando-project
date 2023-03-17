import ButtonNextSection from '@/components/atoms/ButtonNextSection';
import ButtonSection from '@/components/atoms/ButtonSection';
import ProfilePhoto from '@/components/atoms/ProfilePhoto';
import Card from '@/components/Card';
import Layout from '@/components/Layout';
import { getProfile } from '@/lib/services/auth.services';
import { usePublications } from '@/lib/services/publications.services';
import {
  getUserPublications,
  getUserVotes,
} from '@/lib/services/user.services';
import Cookie from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import footerImage from '../public/assets/footer-image.jpg';

export default function Profile() {
  const [container, setContainer] = useState(false);

  const { data } = getProfile();

  const { data: votes } = getUserVotes(data?.results.id);

  const { data: publications, mutate } = usePublications();

  const { data: userPublications } = getUserPublications(data?.results.id);

  const myVotes: any[] = [];

  votes?.results.results.forEach((vote: any) => {
    const pub = publications?.results.results.filter(
      (pubs: any) => vote.publications_id === pubs.id
    );
    myVotes.push(pub[0]);
  });
  const router = useRouter();

  return (
    <Layout noFooter>
      <div className="bg-BLUE w-full h-129 relative flex justify-center cursor-pointer">
        <ProfilePhoto />
      </div>

      <div className="h-44 mt-11 m-auto flex justify-around p-5 sm:w-96 font-roboto">
        <div onClick={() => setContainer(!container)}>
          <ButtonSection name="Mis votos" style="h-9 px-5" />
        </div>
        <div onClick={() => setContainer(!container)}>
          <ButtonSection name="Mis publicaciones" style="h-9 px-5" />
        </div>
      </div>
      {container ? (
        <div className="m-auto grid max-sm:grid-cols-1 sm:grid-cols-2 sm:grid-row-2 lg:grid-cols-3 lg:grid-row-3 lg:w-10/12 md:w-8/12">
          {userPublications?.results.results.map((pub: any) => (
            <Card
              key={pub.id}
              id={pub.id}
              /* cardStyle="max-sm:ml-5 max-md:ml-18 max-lg:ml-16" */
              cardStyle="m-auto"
              fill="#D9D9D9"
              image={pub.images[0]?.image_url}
              title={pub?.title}
              description={pub.description}
              votes={pub.votes_count}
              redirect={() => router.push(`/event/${pub.id}`)}
              mutate={mutate}
              referenceLink={pub.reference_link}
            />
          ))}
        </div>
      ) : (
        <div className="m-auto grid max-sm:grid-cols-1 sm:grid-cols-2 sm:grid-row-2 lg:grid-cols-3 lg:grid-row-3 lg:w-10/12 md:w-8/12">
          {myVotes.map((pub: any) => (
            <Card
              key={pub?.id}
              id={pub?.id}
              /* cardStyle="max-sm:ml-5 max-md:ml-18 max-lg:ml-16" */
              cardStyle="m-auto"
              fill="#D9D9D9"
              image={pub?.images[0]?.image_url}
              title={pub?.title}
              description={pub?.description}
              votes={pub?.votes_count}
              redirect={() => router.push(`/event/${pub?.id}`)}
              mutate={mutate}
              referenceLink={pub?.reference_link}
            />
          ))}
        </div>
      )}

      <div className="h-40 w-full flex items-center justify-center lg:hidden">
        <ButtonNextSection name="Siguiente" />
      </div>
      <div className="h-40 w-full flex items-center justify-center max-lg:hidden">
        1 2 3 Pagination 4 5 6
      </div>
      <Image
        src={footerImage}
        alt="image-footer"
        className="w-full object-cover h-[200px]"
      />
    </Layout>
  );
}
