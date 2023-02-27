import LogoClose from "./svgs/IconClose";

const SignIn = () => {
  return (
    <>
      <div className="w-378 h-529 p-8 border bg-zinc-800/90 text-white rounded-2xl pl-16 pr-16 grid grid-rows-auto gap-y-2 shadow-2xl z-10 relative lg:w-557 lg:h-560 lg:p-8">
        <div className="h-32 w-32 absolute -right-16 top-5">
          <LogoClose/>
        </div>

        <div className="flex flex-col justify-center">
          <h1>Todos Votamos :)</h1>
          <p>Regístrate para ingresar.</p>
        </div>

        <div className="flex flex-col justify-center">
          <form className="flex-row">
            <legend>Email</legend>
            <input
              className="w-full rounded-md bg-zinc-800/40 border-r-2 border h-12 p-4 placeholder:text-white"
              type="text"
              placeholder="john.doe@gmail.com"
            />
            <div className="flex flex-row justify-between">
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
    </>
  );
};

export default SignIn;
