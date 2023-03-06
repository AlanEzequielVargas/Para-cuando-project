import CategoriesBar from '@/components/CategoriesBar';
import Layout from '@/components/Layout';
import MiniHero from '@/components/MiniHero';
import SearchNavBar from '@/components/SearchNavbar';
import Slider from '@/components/Slider';

export default function artists() {
  return (
    <Layout>
      <MiniHero background="bg-[url('/assets/artists-background.jpg')] md:bg-[center_bottom_25rem]" title='Artistas y Conciertos' description='Descubre los artistas y conciertos que la gente quiere cerca'/>
      <SearchNavBar />
      <Slider />
      <Slider />
      <CategoriesBar />
      <Slider />
    </Layout>
  );
}
