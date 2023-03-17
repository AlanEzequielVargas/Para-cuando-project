import CategoriesBar from '@/components/CategoriesBar';
import Layout from '@/components/Layout';
import MiniHero from '@/components/MiniHero';
import SearchNavBar from '@/components/SearchNavbar';
import Slider from '@/components/Slider';

export default function brands() {
  return (
    <Layout>
      <MiniHero
        background="bg-[url('/assets/brands-background.jpg')] bg-center"
        title="Marcas y tiendas"
        description="Descubre las marcas y tiendas que la gente quiere cerca"
      />
      <SearchNavBar />
      <div className="md:w-10/12 lg:w-[1000px] m-auto">
        <Slider
          title="Populares en Querétaro"
          subtitle="Lo que las personas piden más"
        />
        <Slider
          title="Sugerencias para ti"
          subtitle="Publicaciones que podrías colaborar"
        />
        <CategoriesBar />
        <Slider
          title="Recientes"
          subtitle="Las personas últimanete están hablando de esto"
        />
      </div>
    </Layout>
  );
}
