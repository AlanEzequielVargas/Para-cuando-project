import ArtistInfo from '@/components/ArtistInfo';
import CategoriesBar from '@/components/CategoriesBar';
import Layout from '@/components/Layout';
import SearchNavBar from '@/components/SearchNavbar';
import Slider from '@/components/Slider';

export default function details() {
  return (
    <Layout>
      <SearchNavBar />
      <ArtistInfo />
      <CategoriesBar />
      <Slider />
    </Layout>
  );
}
