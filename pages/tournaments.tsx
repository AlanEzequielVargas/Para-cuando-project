import CategoriesBar from '@/components/CategoriesBar';
import Layout from '@/components/Layout';
import MiniHero from '@/components/MiniHero';
import SearchNavBar from '@/components/SearchNavbar';
import Slider from '@/components/Slider';

export default function tournaments() {
  return (
    <Layout>
      <MiniHero
        background="bg-[url('/assets/tournaments-background.jpg')] bg-[center_top_0rem] md:bg-[center_bottom_25rem]"
        title="Torneos y eventos"
        description="Descubre los torneos y eventos que la gente quiere cerca"
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
