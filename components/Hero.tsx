import { useRouter } from 'next/router';
import { useEffect ,useState} from 'react';
import ButtonSection from './atoms/ButtonSection';
import Input from './atoms/Input';
import LogoParaCuando from './svgs/LogoParaCuando';



const Hero = () => {
  const router = useRouter();

  const [countryName, setCountryName] = useState('default');

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {if(data.country_name === ''){setCountryName(data.country_name)}})
      .catch(error => console.log(error));
  }, []);

  return (
    <div
      className={`relative h-[30.5rem] bg-[url('/assets/heros/default-hero.jpg')] bg-cover bg-center`}
    >
      <div className="absolute w-full h-full ">
        <div className="flex justify-center items-center flex-col h-full gap-y-5">
          <div className="w-52">
            <LogoParaCuando color="#FFFFFF" />
          </div>
          <div className="relative w-[343px] sm:w-[465px]" >
            <Input />
          </div>
          <div className="flex flex-row justify-around text-sm w-[362px] sm:w-[400px]">
            <div onClick={() => router.push('/brands')}>
              <ButtonSection name="Marcas y tiendas" style="h-8 px-1 sm:px-3" />
            </div>
            <div onClick={() => router.push('/artists')}>
              <ButtonSection
                name="Artistas y conciertos"
                style="h-8 px-1 sm:px-3"
              />
            </div>
            <div onClick={() => router.push('/tournaments')}>
              <ButtonSection name="Torneos" style="h-8 px-1 sm:px-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
