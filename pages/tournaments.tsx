import CategoriesBar from "@/components/CategoriesBar";
import MiniHero from "@/components/MiniHero";
import SearchNavBar from "@/components/SearchNavbar";
import Slider from "@/components/Slider";


export default function tournaments() {
  return (
    <>
      <MiniHero/>
      <SearchNavBar/>
      <Slider/>
      <Slider/>
      <CategoriesBar/>
      <Slider/>
    </>
  );
}