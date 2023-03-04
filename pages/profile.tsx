import ButtonAction from '@/components/atoms/ButtonAction';
import ButtonSection from '@/components/atoms/ButtonSection';
import Card from '@/components/Card';
import Image from 'next/image';


export default function profile() {

  return (
    <>
      <div className="bg-BLUE w-full h-129 relative flex justify-center">
        <Image
          className="w-117 h-117 absolute top-16"
          src={'/assets/profile-image.png'}
          alt="imagen de prueba"
          width={100}
          height={100}
        />
      </div>

      <div className="h-44 mt-11 m-auto flex justify-around p-5 sm:w-96">
        <ButtonSection name='Mis votos' height=''/>
        <ButtonSection name='Mis publicaciones' height=''/>
      </div>

      
      <div className="m-auto grid max-sm:grid-cols-1 sm:grid-cols-2 sm:grid-row-2 lg:grid-cols-3 lg:grid-row-3 lg:w-10/12 md:w-8/12">
        <Card fill="#FF64BC"/>
        <Card fill="#FF64BC"/>
        <Card fill="#FF64BC"/>
        <Card fill="#FF64BC"/>
        <Card fill="#FF64BC"/>
        <Card fill="#FF64BC"/>
        <Card fill="#FF64BC"/>
        <Card fill="#FF64BC"/>
      </div>
      <div className="h-40 w-full flex items-center justify-center lg:hidden">
        <ButtonAction name='Ver más'/>
      </div>
      <div className="h-40 w-full flex items-center justify-center max-lg:hidden">
        1 2 3 Pagination 4 5 6
      </div>
    </>
  );
}
