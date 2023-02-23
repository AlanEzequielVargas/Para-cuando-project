import { useState } from 'react';

const CreateAccount = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && (
        <div className="h-483px w-362px bg-zinc-800/90 text-white rounded-2xl p-5 grid grid-rows-3 gap-y-2 shadow-2xl absolute top-20 right-20 z-10">
          <div className="h-5 flex justify-end">
            <span
              className="text-center rounded-full w-8 h-8 text-yellow-300 font-bold cursor-pointer"
              onClick={() => setShow(!show)}
            >
              x
            </span>
          </div>

          <div className="text-center">
            <h1>Todos Votamos :)</h1>
            <p>Todos los votos son importantes aquí. Para validar el tuyo debes tener una cuenta.</p>
          </div>

          
          <div className="flex flex-col w-full mt-0">
            <button className="bg-yellow-300 text-BLACKLIGHT font-bold rounded-md h-10">
              Crear cuenta
            </button>
            <a className="text-yellow-300 underline mt-0 text-center" href="#">
              O inicia sesión
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateAccount;