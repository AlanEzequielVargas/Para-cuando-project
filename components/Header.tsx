import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center bg-black h-16">
      <div className="container flex flex-row justify-between items-center pl-5 pr-5">
        <Image
          src={'/assets/pc.png'}
          alt={'remote image pc?'}
          width={50}
          height={50}
          className="cursor-pointer"
          onClick={() => router.push('/')}
        />
        <div className="flex flex-row items-center text-white text-sm">
          <button
            className="flex items-center pr-5 hidden sm:flex"
            onClick={() => router.push('/post')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-blue-600 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
            <p className="text-blue-600">Crear publicación</p>
          </button>
          <p
            className="px-5 hidden sm:block cursor-pointer"
            onClick={() => router.push('/login')}
          >
            Log In
          </p>
          <p className="px-5 hidden sm:block">Sign Up</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
