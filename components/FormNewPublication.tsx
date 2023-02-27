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
    <>
      <div className="h-2 bg-gray-300 rounded-full overflow-hidden w-1/2 mx-auto text-center flex items-center mt-4">
        <div
          className={`h-full bg-blue-500 transition-all duration-500 ease-in-out ${
            step === 2 ? 'w-full' : 'w-1/2'
          }`}
        ></div>
      </div>

      <form className="p-10" onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <>
            <h1 className="text-2xl font-bold">Publicación</h1>
            <p>Información básica</p>
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
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm mt-3"
                onFocus={() => handleFocus('title')}
                onBlur={() => handleBlur('title')}
              />
            </div>

            <div className="flex flex-col sm:flex-row mb-4">
              <div className="w-full sm:w-1/2 sm:mr-2">
                <label
                  htmlFor="type"
                  className="block mb-2 font-bold text-gray-700"
                ></label>
                <select
                  id="type"
                  {...register('type', { required: true })}
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="">Tipo</option>
                  {types.map((type) => (
                    <option value={type} key={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full sm:w-1/2 sm:ml-2 mt-2 sm:mt-0">
                <label
                  htmlFor="category"
                  className="block mb-2 font-bold text-gray-700"
                ></label>
                <select
                  id="category"
                  {...register('category', { required: true })}
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm form-field mt-3"
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
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm form-field mt-3"
                onFocus={() => handleFocus('referenceLink')}
                onBlur={() => handleBlur('referenceLink')}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-800"
                onClick={() => setStep(2)}
              >
                Siguiente
              </button>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <h1 className="font-bold">Fotos</h1>
            <p>Selecciona máximo 3 fotos para crear una galería:</p>
            <div className="border border-gray rounded-lg p-6 h-auto mt-8 w-2/3 mx-auto">
              <div className="grid grid-cols-3 gap-4">
                {boxes.map((box) => (
                  <div
                    key={box}
                    className="bg-gray-300 rounded-md flex justify-center items-center h-36 w-full relative cursor-pointer"
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
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-800"
              >
                Publicar
              </button>
            </div>
          </>
        )}
      </form>
    </>
  );
};

export default FormNewPublication;
