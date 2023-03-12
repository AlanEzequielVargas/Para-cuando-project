import LogoClose from './svgs/IconClose';
import { useForm, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import EyeSlash from './atoms/EyeSlash';
import { useState } from 'react';
import { login } from '@/lib/services/auth.services';
import Cookie from 'js-cookie';

interface IFormInput {
  email: String;
  contraseña: String;
}


const Login = () => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    watch,
  } = useForm<IFormInput>({ mode: 'onChange' });


  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(isValid)
    if (isValid) {

      const user = {email: data.email, password: data.contraseña};
      login(user)
      .then((res) => {
        console.log(res); 
        Cookie.set('token',res.data.token);
        router.push('/');
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Ocurrió un error!',
          html: '<p>Haz iniciado sesión correctamente.</p>',
          timer: 1500,
          toast: true,
        });
      })
  }};

  const [show, setShow] = useState(false);

  const email = watch('email');
  const contraseña = watch('contraseña');
 
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
                {...register('email'/* ,{
                  required: {
                    value: true,
                    message: '* Este campo es obligatorio',
                  },
                  minLength: {
                    value: 13,
                    message: '* Tu email debe ser mayor a 13 caracteres',
                  },
                  maxLength: {
                    value: 30,
                    message: '* Tu email debe ser menor a 30 caracteres',
                  },
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                    message: '* Procura que tu correo este escrito correctamente',
                  },
                } */)}
                className="w-full rounded-md bg-zinc-800/40 border-r-2 border h-12 p-4 placeholder:text-GRAY"
                type="email"
                placeholder="john.doe@gmail.com"
                id="email"
              />
              <legend>Contraseña</legend>
              <input
                {...register('contraseña'/* ,{
                  required: {
                    value: true,
                    message: '* Este campo es obligatorio',
                  },
                  minLength: {
                    value: 13,
                    message: '* Tu email debe ser mayor a 13 caracteres',
                  },
                  maxLength: {
                    value: 30,
                    message: '* Tu email debe ser menor a 30 caracteres',
                  },
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                    message: '* Procura que tu correo este escrito correctamente',
                  },
                } */)}
                className="w-full rounded-md bg-zinc-800/40 border-r-2 border h-12 pl-4 placeholder:text-GRAY"
                type={show ? 'text' : 'password'}
                placeholder="***********"
                id='contraseña'
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
