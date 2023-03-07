import ButtonAction from '@/components/atoms/ButtonAction';
import Layout from '@/components/Layout';
import ButtonAdd from '@/components/svgs/ButtonAdd';
import Image from 'next/image';
import footerImage from '../public/assets/footer-image.jpg';

export default function profileSettings() {
  return (
    <Layout noFooter>
      <div className="bg-BLUE w-full h-129 relative flex justify-center">
        <h1 className="text-white w-full mt-auto mb-auto ml-20 font-bold text-4xl">
          Perfil
        </h1>
      </div>
      <div className="h-screen max-md:h-auto w-9/12 max-sm:w-11/12 m-auto mt-20 mb-20 flex flex-col justify-between gap-y-12">
        <div className="flex justify-between w-full max-md:flex-col">
          <div>
            <h1 className="mb-10">Información de contacto</h1>
            <ButtonAdd
              svgProps={{ className: 'w-220 h-206 rounded-2xl bg-GRAY2' }}
            />
            <p className="max-md:text-center">Agrega una foto de perfil</p>
          </div>

          <div className="w-640 m-auto max-lg:w-96 max-md:w-full">
            <div className="mb-4 mt-4 relative">
              <label
                htmlFor="title"
                className="block mb-2 absolute text-gray-500 top-0 left-3 bg-white px-1"
              >
                First Name
              </label>
              <input
                id="title"
                type="text"
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm form-field mt-3"
              />
            </div>
            <div className="mb-4 mt-4 relative">
              <label
                htmlFor="title"
                className="block mb-2 absolute text-gray-500 top-0 left-3 bg-white px-1"
              >
                Last name
              </label>
              <input
                id="title"
                type="text"
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm form-field mt-3"
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="mb-10">Mis intereses</h1>
          <div className="flex justify-between max-md:flex-col max-md:items-center">
            <ButtonAdd
              svgProps={{
                className:
                  'w-300 h-152 bg-GRAY2 rounded-2xl max-lg:w-52 max-md:mb-10 max-md:w-full',
              }}
            />
            <ButtonAdd
              svgProps={{
                className:
                  'w-300 h-152 bg-GRAY2 rounded-2xl max-lg:w-52 max-md:mb-10 max-md:w-full',
              }}
            />
            <ButtonAdd
              svgProps={{
                className:
                  'w-300 h-152 bg-GRAY2 rounded-2xl max-lg:w-52 max-md:mb-10 max-md:w-full',
              }}
            />
          </div>
        </div>
        <div className="w-52 m-auto">
          <ButtonAction name="Guardar cambios" />
        </div>
      </div>
      <Image
        src={footerImage}
        alt="image-footer"
        className="w-full object-cover h-[200px]"
      />
    </Layout>
  );
}
