import CategoriesBar from '@/components/CategoriesBar';
import Layout from '@/components/Layout';
import MiniHero from '@/components/MiniHero';
import SearchNavBar from '@/components/SearchNavbar';
import Slider from '@/components/Slider';

export default function brands() {
  return (
    <Layout>
      <MiniHero background="bg-[url('/assets/brands-background.jpg')] bg-center" title='Marcas y tiendas' description='Descubre las marcas y tiendas que la gente quiere cerca'/>
      <SearchNavBar />
      <Slider />
      <Slider />
      <CategoriesBar />
      <Slider />
    </Layout>
  );
}
