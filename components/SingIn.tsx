import { useState } from 'react';

const SignIn = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && (
        <div className="h-483px w-362px bg-zinc-800/90 text-white rounded-2xl p-5 grid grid-rows-auto gap-y-2 shadow-2xl absolute top-20 right-20 z-10">
          <div className="h-5 flex justify-end">
            <span
              className="text-center rounded-full w-8 h-8 text-yellow-300 font-bold cursor-pointer"
              onClick={() => setShow(!show)}
            >
              x
            </span>
          </div>

          <div className="">
            <h1>Todos Votamos :)</h1>
            <p>Regístrate para ingresar.</p>
          </div>

          <div>
            <form className="flex-row">
              <legend>Email</legend>
              <input
                className="w-full rounded-md bg-zinc-800/40 border-r-2 border h-12 p-4 placeholder:text-white"
                type="text"
                placeholder="john.doe@gmail.com"
              />
              <div className="flex flex-row gap-x-3">
                <div>
                  <legend>Nombre</legend>
                  <input
                    className="w-full rounded-md bg-zinc-800/40 border-r-2 border h-12 pl-4 placeholder:text-white"
                    type="password"
                    placeholder="John"
                  />
                </div>
                <div>
                  <legend>Apellido</legend>
                  <input
                    className="w-full rounded-md bg-zinc-800/40 border-r-2 border h-12 pl-4 placeholder:text-white"
                    type="password"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <legend>Contraseña</legend>
              <input
                className="w-full rounded-md bg-zinc-800/40 border-r-2 border h-12 pl-4 placeholder:text-white"
                type="password"
                placeholder="***********"
              />
            </form>
            
          </div>
          <div className="flex flex-col w-full m-auto">
            <button className="bg-yellow-300 text-BLACKLIGHT font-bold rounded-md h-10">
              Crear cuenta
            </button>
            <a className="text-yellow-300 underline m-auto" href="#">
              O inicia sesión
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default SignIn;
