import React from 'react';
import { useState } from 'react';

const Login = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && (
        <div className="h-483px w-362px bg-zinc-800 text-white rounded-2xl p-5 grid grid-rows-auto gap-y-2 shadow-2xl absolute top-20 z-10">
          <div className="h-5 flex justify-end">
            <span
              className="text-center rounded-full w-8 h-8 text-yellow-300 font-bold cursor-pointer"
              onClick={() => setShow(!show)}
            >
              x
            </span>
          </div>

          <div className="">
            <h1>¡Hola!</h1>
            <p>Inicie sesión con los datos que ingresó durante su registro.</p>
          </div>

          <div>
            <form className="flex-row">
              <legend>Email</legend>
              <input
                className="w-full rounded-md bg-zinc-800 border-r-2 border h-12 p-4 placeholder:text-white"
                type="text"
                placeholder="john.doe@gmail.com"
              />
              <legend>Contraseña</legend>
              <input
                className="w-full rounded-md bg-zinc-800 border-r-2 border h-12 pl-4 placeholder:text-white"
                type="password"
                placeholder="***********"
              />
            </form>
            <p className="text-center">
              ¿Olvidaste tu contraseña?{' '}
              <a className="text-yellow-300 underline" href="#">
                Recupérala Aquí
              </a>
            </p>
          </div>
          <div className="flex flex-col w-full m-auto">
            <button className="bg-yellow-300 text-BLACKLIGHT rounded-md h-10">
              Iniciar sesión
            </button>
            <a className="text-yellow-300 underline m-auto" href="#">
              O crear una cuenta
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
