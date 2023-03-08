import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { popUpLoginClose } from '@/slices/popUpLoginSlice';
import LogoClose from './svgs/IconClose';


const CreateAccount = () => {
 
  const router = useRouter();

  

  //redux configuracion
  const dispatch = useDispatch();
  return (
    <>
        <div className="popup-enter h-483px w-362px border bg-black/80 text-white rounded-2xl p-5 grid grid-rows-3 gap-y-2 shadow-2xl absolute top-20 right-2 sm:right-5 md:right-12 z-10">
          <div className="h-5 flex justify-end">
            <div
              className="h-10 w-10 absolute right-3 top-3"
              onClick={() => dispatch(popUpLoginClose())}
            >
              <LogoClose />
            </div>
          </div>

          <div className="text-center">
            <h1>Todos Votamos :)</h1>
            <p>
              Todos los votos son importantes aquí. Para validar el tuyo debes
              tener una cuenta.
            </p>
          </div>

          <div className="flex flex-col w-full mt-0">
            <button
              className="bg-yellow-300 text-BLACKLIGHT font-bold rounded-md h-10"
              onClick={() => {
                dispatch(popUpLoginClose());
                router.push('/signup');
              }}
            >
              Crear cuenta
            </button>
            <a
              className="text-yellow-300 underline mt-0 text-center"
              href="#"
              onClick={() => {
                dispatch(popUpLoginClose());
                router.push('/login');
              }}
            >
              O inicia sesión
            </a>
          </div>
        </div>
    </>
  );
};

export default CreateAccount;
