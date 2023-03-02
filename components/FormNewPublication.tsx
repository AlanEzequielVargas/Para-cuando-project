import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

const FormNewPublication = () => {
  type FormValues = {
    title: string;
    type: 'Marcas y tiendas' | 'Artistas y conciertos' | 'Torneos';
    category:
      | 'Ropa y Accesorios'
      | 'Deportes'
      | 'Conciertos'
      | 'Meet & Greet'
      | 'E-sport'
      | 'Pop - Rock'
      | 'Tecnología'
      | 'Hogar - Decoración'
      | 'Abastecimiento';
    whyRecommend: string;
    referenceLink: string;
    images: FileList | null;
  };

  const types: Array<string> = [
    'Marcas y tiendas',
    'Artistas y conciertos',
    'Torneos',
  ];

  const categories: Array<string> = [
    'Ropa y Accesorios',
    'Deportes',
    'Conciertos',
    'Meet & Greet',
    'E-sport',
    'Pop - Rock',
    'Tecnología',
    'Hogar - Decoración',
    'Abastecimiento',
  ];

  const router = useRouter();

  const [step, setStep] = useState<number>(1);

  // const [listFile, setListFile] = useState<File[]>([]);

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log(data);
    alert('Publicación realizada exitosamente.');
    router.push('/');
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBoxClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const boxes: Array<number> = [1, 2, 3];

  const [labelClass, setLabelClass] = useState<string>('');
  const [selectedInput, setSelectedInput] = useState<string>('');

  const handleFocus = (id: string) => {
    setLabelClass('transform -translate-y-3');
    setSelectedInput(id);
  };

  const handleBlur = (id: string) => {
    if (selectedInput === id) {
      setLabelClass('');
      setSelectedInput('');
    }
  };

  return (
    <form className="p-2 w-full" onSubmit={handleSubmit(onSubmit)}>
      {step === 1 && (
        <Link
          href={'/'}
          className="text-blue-800 mb-10 h-36 font-semibold text-lg"
          style={{ color: '#1B4DB1' }}
        >
          Back
        </Link>
      )}
      {step === 2 && (
        <Link
          href={'/post'}
          onClick={() => setStep(1)}
          className="text-blue-800 mb-10 h-36 font-semibold text-lg"
          style={{ color: '#1B4DB1' }}
        >
          Back
        </Link>
      )}

      <div className="sm:ml-20 sm:w-4/6 mt-10 sm:max-w-screen-sm">
        <div className="h-2 bg-gray-300 rounded-full overflow-hidden mx-auto text-center flex items-center mt-4">
          {' '}
          <div
            className={`h-full bg-blue-500 transition-all duration-500 ease-in-out ${
              step === 1 ? 'w-1/2' : 'w-full'
            }`}
          ></div>
        </div>
      </div>

      {step === 1 && (
        <div className="">
          <div className="sm:ml-20 sm:w-4/6 mt-10 sm:max-w-screen-sm">
            <h1 className="text-2xl font-bold mt-8">Publicación</h1>
            <p className="text-gray-800 mt-2">Información básica</p>
            <div className="mb-4 mt-4 relative">
              <label
                htmlFor="title"
                className={`block mb-2 absolute text-gray-500 top-0 left-3 bg-white px-1 transition-all duration-300 ease-in-out ${labelClass}`}
              >
                Título de publicación
              </label>
              <input
                id="title"
                {...register('title', { required: true })}
                type="text"
                className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm mt-3"
                onFocus={() => handleFocus('title')}
                onBlur={() => handleBlur('title')}
              />
            </div>
            <div className="flex flex-col sm:flex-row mb-4">
              <div className="w-full sm:w-1/2 sm:mr-2 text-gray-500">
                <label htmlFor="type" className="block mb-2 font-bold"></label>
                <select
                  id="type"
                  {...register('type', { required: true })}
                  className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  <option value="">Tipo</option>
                  {types.map((type) => (
                    <option value={type} key={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full sm:w-1/2 sm:ml-2 mt-2 sm:mt-0 text-gray-500 bg-white">
                <label
                  htmlFor="category"
                  className="block mb-2 font-bold"
                ></label>
                <select
                  id="category"
                  {...register('category', { required: true })}
                  className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  <option value="">Categoría</option>
                  {categories.map((category) => (
                    <option value={category} key={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="whyRecommend"
                className={`block mb-2 absolute text-gray-500 top-0 left-3 bg-white px-1 transition-all duration-300 ease-in-out ${labelClass}`}
              >
                ¿Por qué lo recomiendas?
              </label>
              <textarea
                id="whyRecommend"
                {...register('whyRecommend', { required: true })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm form-field mt-3"
                onFocus={() => handleFocus('whyRecommend')}
                onBlur={() => handleBlur('whyRecommend')}
              />
            </div>
            <div className="mb-4 relative">
              <label
                className={`block mb-2 absolute text-gray-500 top-0 left-3 bg-white px-1 transition-all duration-300 ease-in-out ${labelClass}`}
              >
                Link de referencia
              </label>
              <input
                id="referenceLink"
                type="text"
                {...register('referenceLink')}
                className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm form-field mt-3"
                onFocus={() => handleFocus('referenceLink')}
                onBlur={() => handleBlur('referenceLink')}
              />
            </div>
            <div className="flex justify-center py-5">
              <button
                type="button"
                className="px-4 py-2 bg-blue-800 text-white rounded-full hover:bg-blue-500"
                onClick={() => setStep(2)}
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <>
          <div className="sm:ml-20 sm:w-4/6 mt-10 sm:max-w-screen-sm">
            <h1
              className="pt-10 font-semibold mt-5"
              style={{ color: '#1A1E2E' }}
            >
              Fotos
            </h1>
            <p className="mt-1 text-gray-600">
              Selecciona máximo 3 fotos para crear una galería:
            </p>
            <div className="border border-gray-400 rounded-lg sm:p-6 p-2 h-auto mt-8 mx-auto">
              <div className="grid grid-cols-3 sm:gap-4 gap-1">
                {boxes.map((box) => (
                  <div
                    key={box}
                    className="bg-gray-300 flex justify-center items-center sm:h-36 h-28 w-full relative cursor-pointer"
                    onClick={handleBoxClick}
                  >
                    <div className="rounded-full h-10 w-10 font-bold text-2xl text-blue-500 flex justify-center items-center">
                      +
                    </div>
                    <input
                      type="file"
                      multiple
                      className="opacity-0 absolute inset-0 w-full h-full file-input cursor-pointer"
                      {...register('images', {
                        required: false,
                      })}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center py-10 my-5">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-800 text-white rounded-full hover:bg-blue-500"
              >
                Publicar
              </button>
            </div>
          </div>
        </>
      )}
    </form>
  );
};

export default FormNewPublication;
