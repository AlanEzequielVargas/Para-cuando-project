import LogoClose from "./svgs/IconClose";

const Login = () => {
  return (
    <>
      <div className="w-378 h-529 border bg-zinc-800/90 text-white rounded-2xl p-8 grid grid-rows-auto gap-y-2 shadow-2xl z-10 relative lg:w-557 lg:h-560 lg:pl-16 lg:pr-16" >
        
        <div className="h-10 w-h-10 absolute right-5 top-5">
          <LogoClose/>
        </div>
        

        <div className="flex flex-col justify-end">
          <h1>¡Hola!</h1>
          <p>Inicie sesión con los datos que ingresó durante su registro.</p>
        </div>

        <div className="flex flex-col justify-center">
          <form className="flex-row">
            <legend>Email</legend>
            <input
              className="w-full rounded-md bg-zinc-800/40 border-r-2 border h-12 p-4 placeholder:text-white"
              type="text"
              placeholder="john.doe@gmail.com"
            />
            <legend>Contraseña</legend>
            <input
              className="w-full rounded-md bg-zinc-800/40 border-r-2 border h-12 pl-4 placeholder:text-white"
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
          <button className="bg-yellow-300 text-BLACKLIGHT font-bold rounded-md h-10">
            Iniciar sesión
          </button>
          <a className="text-yellow-300 underline m-auto" href="#">
            O crear una cuenta
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
