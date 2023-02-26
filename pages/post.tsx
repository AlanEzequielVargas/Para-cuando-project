import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Post() {
  type FormValues = {
    title: string;
    type: 'Marcas y Tiendas' | 'Artistas y Conciertos' | 'Torneos';
    category: 'Deportes' | 'Conciertos';
    whyRecommend: string;
    referenceLink: string;
  };

  const [step, setStep] = useState<number>(1);

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log(data);
    setStep(2);
  };

  return (
    <div className="flex">
      <div className="aside">
        <aside className="h-screen w-1/5 bg-blue-500 flex flex-col justify-between p-8">
          <div className="text-white">
            <h1 className="text-xl font-bold">
              Para <br /> Cuando ?
            </h1>
            <p>Marcas, artistas y torneos</p>
          </div>
          <div className="text-white">
            <h2 className="font-semibold" style={{ color: 'yellow' }}>
              Bienvenido, <br /> Creador!
            </h2>
            <p className="mt-4">
              A continuación, puedes completar la info de la marca, artista o
              torneo que quieres crear.
            </p>
          </div>
          <div className="text-white">
            <h2 className="text-lg font-bold">Ayuda</h2>
          </div>
        </aside>
      </div>
      <main className="w-4/5 p-8 main-form_post">
        <Link href={'/'}>Back</Link>
        <div className="h-2 bg-gray-300 rounded-full overflow-hidden w-1/2 mx-auto text-center flex items-center">
          <div
            className={`h-full bg-blue-500 transition-all duration-500 ease-in-out ${
              step === 2 ? 'w-full' : 'w-1/2'
            }`}
          ></div>
        </div>
        <h1 className="text-2xl font-bold">Publicación</h1>
        <p>Información básica</p>
        <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block mb-2 font-bold text-gray-700"
            >
              Título de la publicación
            </label>
            <input
              id="title"
              {...register('title', { required: true })}
              type="text"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="flex flex-col sm:flex-row mb-4">
            <div className="w-full sm:w-1/2 sm:mr-2">
              <label
                htmlFor="type"
                className="block mb-2 font-bold text-gray-700"
              >
                Tipo
              </label>
              <select
                id="type"
                {...register('type', { required: true })}
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Selecciona un tipo</option>
                <option value="Marcas y Tiendas">Marcas y Tiendas</option>
                <option value="Artistas y Conciertos">
                  Artistas y Conciertos
                </option>
                <option value="Torneos">Torneos</option>
              </select>
            </div>
            <div className="w-full sm:w-1/2 sm:ml-2 mt-2 sm:mt-0">
              <label
                htmlFor="category"
                className="block mb-2 font-bold text-gray-700"
              >
                Categoría
              </label>
              <select
                id="category"
                {...register('category', { required: true })}
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Selecciona una categoría</option>
                <option value="Deportes">Deportes</option>
                <option value="Conciertos">Conciertos</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="whyRecommend"
              className="block mb-2 font-bold text-gray-700"
            >
              ¿Por qué lo recomiendas?
            </label>
            <textarea
              id="whyRecommend"
              {...register('whyRecommend', { required: true })}
              rows={3}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Link de referencia</label>
            <input
              type="text"
              {...register('referenceLink')}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Siguiente
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
