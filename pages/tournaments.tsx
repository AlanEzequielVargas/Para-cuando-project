import CategoriesBar from '@/components/CategoriesBar';
import Layout from '@/components/Layout';
import MiniHero from '@/components/MiniHero';
import SearchNavBar from '@/components/SearchNavbar';
import Slider from '@/components/Slider';

export default function tournaments() {
  return (
    <Layout>
      <MiniHero background="bg-[url('/assets/tournaments-background.jpg')] bg-[center_top_0rem] md:bg-[center_bottom_25rem]" title='Torneos y eventos' description='Descubre los torneos y eventos que la gente quiere cerca'/>
      <SearchNavBar />
      <Slider />
      <Slider />
      <CategoriesBar />
      <Slider />
    </Layout>
  );
}
