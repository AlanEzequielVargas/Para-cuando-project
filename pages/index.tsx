import CategoriesBar from "@/components/CategoriesBar";
import Hero from "@/components/Hero";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Slider from "../components/Slider";

const Home = () => {
  useEffect(() => {
    showAlert();
  }, []);

  const showAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Success",
      html: "<p>Página cargada exitosamente.</p>",
      timer: 1500
    });
  };
  
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
