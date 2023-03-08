import LogoClose from './svgs/IconClose';
import { useForm, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import EyeSlash from './atoms/EyeSlash';
import { useState } from 'react';
interface IFormInput {
  email: String;
  password: String;
}

const Login = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (data.email === 'john@gmail.com' && data.password === '12345') {
      localStorage.setItem("User", JSON.stringify({email: data.email, password: data.password}));
      router.push('/')
      return Swal.fire({
        icon: 'success',
        title: 'Success',
        html: '<p>Credenciales correctas.</p>',
        timer: 1500,
      });
    }
    Swal.fire({
      icon: 'error',
      title: 'Error',
      html: '<p>Email o password incorrecto.</p>',
    });
  };

  const [show, setShow] = useState(false);

  Swal.fire({
    title: "test this app with:",
    text: "john@gmail.com 12345",
  });

  return (
    <>

      <div className="max-sm:w-350 max-sm:m-auto w-378 h-529 border bg-black/80 text-white rounded-2xl p-8 grid auto-rows-auto gap-y-2 shadow-2xl z-10 relative lg:w-557 lg:h-560 lg:pl-16 lg:pr-16 font-roboto">
        <div className="h-10 w-10 absolute right-3 top-3" onClick={() => router.push('/')}>
          <LogoClose />
        </div>

        <div className="flex flex-col justify-end">
          <h1>¡Hola!</h1>
          <p>Inicie sesión con los datos que ingresó durante su registro.</p>
        </div>

        <div className="flex flex-col justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="flex-row">
            <div className="mb-10">
              <legend>Email</legend>
              <input
                {...register('email')}
                className="w-full rounded-md bg-zinc-800/40 border-r-2 border h-12 p-4 placeholder:text-GRAY"
                type="text"
                placeholder="john.doe@gmail.com"
              />
              <legend>Contraseña</legend>
              <input
                {...register('password')}
                className="w-full rounded-md bg-zinc-800/40 border-r-2 border h-12 pl-4 placeholder:text-GRAY"
                type={show ? 'text' : 'password'}
                placeholder="***********"
              />
              <div onClick={() => setShow(!show)}>
              <EyeSlash styles="absolute right-12 bottom-[220px] sm:bottom-[200px] lg:bottom-[215px] lg:right-20 cursor-pointer" show={show} />
            </div>
              <p className="text-center">
                ¿Olvidaste tu contraseña?{' '}
                <a className="text-YELLOW underline" href="#">
                  Recupérala Aquí
                </a>
              </p>
            </div>
            <div className="flex flex-col w-full m-auto">
              <button className="bg-YELLOW text-BLACKLIGHT font-bold rounded-md h-10">
                <input
                  type="submit"
                  value="Iniciar sesión"
                  className="cursor-pointer"
                />
              </button>
              <a className="text-YELLOW underline m-auto" href="#" onClick={() => router.push('/signup')}>
                O crear una cuenta
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
