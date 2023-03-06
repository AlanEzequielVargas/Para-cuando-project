import CategoriesBar from '@/components/CategoriesBar';
import Layout from '@/components/Layout';
import MiniHero from '@/components/MiniHero';
import SearchNavBar from '@/components/SearchNavbar';
import Slider from '@/components/Slider';

export default function tournaments() {
  return (
    <Layout>
      <MiniHero />
      <SearchNavBar />
      <Slider />
      <Slider />
      <CategoriesBar />
      <Slider />
    </Layout>
  );
}
