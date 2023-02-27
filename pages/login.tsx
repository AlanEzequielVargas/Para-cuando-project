import Login from '@/components/Login';
import LogoLogin from '@/components/svgs/LogoLogin';

export default function login() {
  return (
    <>
      <div className="w-full h-screen grid grid-cols-2 max-md:grid-rows-8 max-md:grid-cols-1">
        <div className='m-auto md:hidden'>
          <LogoLogin width='80' height='80'/>
        </div>
        <div className='m-auto max-md:hidden'>
          <LogoLogin width='250' height='250'/>
        </div>
        <div className='row-2 m-auto'>
          <Login />
        </div>
      </div>
    </>
  );
}
