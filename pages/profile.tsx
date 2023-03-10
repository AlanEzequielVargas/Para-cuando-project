import ButtonAction from '@/components/atoms/ButtonAction';
import ButtonSection from '@/components/atoms/ButtonSection';
import ProfilePhoto from '@/components/atoms/ProfilePhoto';
import Card from '@/components/Card';
import Layout from '@/components/Layout';
import Image from 'next/image';
import footerImage from '../public/assets/footer-image.jpg';

export default function profile() {


  return (
    <Layout noFooter>
      <div className="bg-BLUE w-full h-129 relative flex justify-center cursor-pointer">
        <ProfilePhoto/>
      </div>

      <div className="h-44 mt-11 m-auto flex justify-around p-5 sm:w-96 font-roboto">
        <ButtonSection name="Mis votos" style='h-9 px-5'/>
        <ButtonSection name="Mis publicaciones" style='h-9 px-5'/>
      </div>

      <div className="m-auto grid max-sm:grid-cols-1 sm:grid-cols-2 sm:grid-row-2 lg:grid-cols-3 lg:grid-row-3 lg:w-10/12 md:w-8/12">
        
        <Card
                    cardStyle="max-sm:ml-5 max-md:ml-18 max-lg:ml-16"
                    fill="#FF64BC"
                    image=''
                    title=''
                    description=''
                    votes={0}
                    onClick={() => ''}
                  />
        
      </div>
      
      <div className="h-40 w-full flex items-center justify-center lg:hidden">
        <ButtonAction name="Ver más" />
      </div>
      <div className="h-40 w-full flex items-center justify-center max-lg:hidden">
        1 2 3 Pagination 4 5 6
      </div>
      <Image
        src={footerImage}
        alt="image-footer"
        className="w-full object-cover h-[200px]"
      />
    </Layout>
  );
}