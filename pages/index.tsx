import CategoriesBar from "@/components/CategoriesBar";
import Hero from "@/components/Hero";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="">
      <Hero/>
      <Slider/>
      <Slider/>
      <CategoriesBar/>
      <Slider/>
    </div>
  );
};

export default Home;
