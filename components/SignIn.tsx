import { showAlert } from '@/lib/services/alerts.services';
import { signUp } from '@/lib/services/auth.services';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import CheckStatus from './atoms/CheckStatus';
import EyeSlash from './atoms/EyeSlash';
import LogoClose from './svgs/IconClose';

const SignIn = () => {
  interface FormValues {
    statusText: string;
    status: number;
    email: string;
    nombre: string;
    apellido: string;
    contraseña: string;
  }

  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    watch,
  } = useForm<FormValues>({ mode: 'onChange' });

  const submit: SubmitHandler<FormValues> = (data) => {
    const user = {
      first_name: data.nombre,
      last_name: data.apellido,
      email: data.email,
      password: data.contraseña,
    };
    if (isValid) {
      signUp(user).then((res) => {
        if (res.status === 201) {
          showAlert(
            'Felicidades!',
            false,
            'Ahora puedes iniciar sesión',
            false,
            2000,
            'yellow',
            false,
            'rgba(0,0,123,0.4)',
            '✔'
          );

          router.push('/login');
        } else {
          showAlert(
            'Upss!',
            false,
            'Algo no anda bien, prueba nuevamente',
            'error',
            8000,
            'yellow',
            true,
            'rgba(0,0,0,0.0)',
            'X'
          );
        }
      });
    }
  };

  const [show, setShow] = useState(false);

  const email = watch('email');
  const nombre = watch('nombre');
  const apellido = watch('apellido');
  const contraseña = watch('contraseña');

  return (
    <>
      <div className="max-sm:w-350 max-sm:m-auto w-378 h-529 p-8 border bg-black/80 text-white rounded-2xl pl-16 pr-16 grid grid-rows-auto gap-y-2 shadow-2xl z-10 relative lg:w-557 lg:h-560 lg:p-8 max-lg:p-7">
        <div
          className="h-9 w-9 absolute right-3 top-3"
          onClick={() => router.push('/')}
        >
          <LogoClose />
        </div>

        <div className="flex flex-col justify-center">
          <h1>Todos Votamos :)</h1>
          <p>Regístrate para ingresar.</p>
        </div>

        <div className="flex flex-col justify-center">
          <form className="flex-row" onSubmit={handleSubmit(submit)}>
            <label htmlFor="email">Email</label>
            <input
              className="realtive w-full rounded-md bg-zinc-800/40 border-r-2 border h-12 p-4 placeholder:text-GRAY mb-8"
              {...register('email', {
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
              })}
              type="email"
              placeholder="john@gmail.com"
              id="email"
            />

            {errors.email && (
              <p className="text-GRAY absolute top-[175px] lg:top-[200px] mb-5">
                {errors.email.message}
              </p>
            )}

            <div className="absolute top-[142px] lg:top-[162px] right-12">
              {!errors.email && email && <CheckStatus iconType={true} />}

              {errors.email && !email && <CheckStatus iconType={false} />}
            </div>

            <div className="flex flex-row justify-between gap-x-5">
              <div className="mb-8">
                <label htmlFor="nombre">Nombre</label>
                <input
                  className="w-full rounded-md bg-zinc-800/40 border-r-2 border h-12 pl-4 placeholder:text-GRAY realtive"
                  {...register('nombre', {
                    required: {
                      value: true,
                      message: '* Este campo es obligatorio',
                    },
                    minLength: {
                      value: 2,
                      message: '* Debe colocar al menos 2 caracteres',
                    },
                    maxLength: {
                      value: 20,
                      message: '* Se admite un máximo de 20 caracteres',
                    },
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: '* Caracteres inválidos en el nombre',
                    },
                  })}
                  type="text"
                  placeholder="John"
                  id="nombre"
                />
                {errors.nombre && (
                  <p className="text-GRAY absolute">{errors.nombre.message}</p>
                )}
                <div className="absolute top-[245px] lg:top-[266px] left-[125px] sm:left-[137px] lg:left-[230px] z-10">
                  {!errors.nombre && nombre && <CheckStatus iconType={true} />}

                  {errors.nombre && !nombre && <CheckStatus iconType={false} />}
                </div>
              </div>
              <div>
                <label htmlFor="apellido">Apellido</label>
                <input
                  className="w-full rounded-md bg-zinc-800/40 border-r-2 border h-12 pl-4 placeholder:text-GRAY relative"
                  {...register('apellido', {
                    required: {
                      value: true,
                      message: '* Este campo es obligatorio',
                    },
                    minLength: {
                      value: 2,
                      message: '* Debe colocar al menos 2 caracteres',
                    },
                    maxLength: {
                      value: 20,
                      message: '* Se admite un máximo de 20 caracteres',
                    },
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: '* Caracteres inválidos en el nombre',
                    },
                  })}
                  type="text"
                  placeholder="Doe"
                  id="apellido"
                />
                {errors.apellido && (
                  <p className="text-GRAY absolute">
                    {errors.apellido.message}
                  </p>
                )}
                <div className="absolute top-[245px] lg:top-[266px] right-12 z-10">
                  {!errors.apellido && apellido && (
                    <CheckStatus iconType={true} />
                  )}

                  {errors.apellido && !apellido && (
                    <CheckStatus iconType={false} />
                  )}
                </div>
              </div>
            </div>
            <label htmlFor="contraseña">Contraseña</label>
            <input
              className="w-full rounded-md bg-zinc-800/40 border-r-2 border h-12 pl-4 placeholder:text-GRAY relative"
              {...register('contraseña', {
                required: {
                  value: true,
                  message: '* Este campo es obligatorio',
                },
                minLength: {
                  value: 8,
                  message: '* Su contraseña debe tener más de 7 caracteres',
                },
                maxLength: {
                  value: 20,
                  message: '* Su contraseña debe tener menos de 25 caracteres',
                },
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,20}$/,
                  message:
                    '* La contraseña debe tener mayúsculas, minúsculas y números',
                },
              })}
              type={show ? 'text' : 'password'}
              placeholder="***********"
              id="contraseña"
            />
            <div onClick={() => setShow(!show)}>
              <EyeSlash
                styles="absolute right-12 bottom-[160px] lg:bottom-[169px] cursor-pointer"
                show={show}
              />
            </div>

            {errors.contraseña && (
              <p className="text-GRAY absolute">{errors.contraseña.message}</p>
            )}

            <div className="absolute top-[348px] lg:top-[370px] right-20 z-10">
              {!errors.contraseña && contraseña && (
                <CheckStatus iconType={true} />
              )}

              {errors.contraseña && !contraseña && (
                <CheckStatus iconType={false} />
              )}
            </div>
            <div className="flex flex-col w-full m-auto mt-12">
              <button
                type="submit"
                className="bg-YELLOW text-BLACKLIGHT font-bold rounded-md h-10"
              >
                Crear cuenta
              </button>
              <Link href="#" passHref legacyBehavior>
                <a
                  className="text-YELLOW underline m-auto"
                  href="#"
                  onClick={() => router.push('/login')}
                >
                  O inicia sesión
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
