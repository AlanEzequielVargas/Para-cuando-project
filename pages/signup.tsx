import SignIn from '@/components/SingIn';
import LogoLogin from '@/components/svgs/LogoLogin';

export default function signup() {
  return (
    
      <div style={{boxShadow: '800px 20px 300px -71px rgba(0,0,0,0.80) inset'}} className="bg-[url('/assets/login-background.jpg')] bg-cover bg-center w-full h-screen grid grid-cols-2 max-md:grid-rows-8 max-md:grid-cols-1">
        <div className='m-auto md:hidden'>
          <LogoLogin width='80' height='80'/>
        </div>
        <div className='m-auto max-md:hidden'>
          <LogoLogin width='250' height='250'/>
        </div>
        <div className='row-2 m-auto'>
          <SignIn />
        </div>
      </div>
    
  );
}
