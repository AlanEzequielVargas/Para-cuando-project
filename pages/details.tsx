import ArtistInfo from '@/components/ArtistInfo';
import CategoriesBar from '@/components/CategoriesBar';
import SearchNavBar from '@/components/SearchNavbar';
import Slider from '@/components/Slider';


export default function details() {
  return (
    <>
      <SearchNavBar/>
      <ArtistInfo/>
      <CategoriesBar/>
      <Slider />
    </>
  );
}
