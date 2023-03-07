import Image from 'next/image';
import {  useRouter } from 'next/router';
import React from 'react';


const ProfilePhoto: React.FC = () => {

  const router = useRouter()

  return (
    
    <Image
          className="w-117 h-117 absolute"
          style={{top: '75px'}}
          src={'/assets/profile-image.png'}
          alt="Profile image"
          width={100}
          height={100}
          onClick={() => router.push('/profileSettings')}
        />
    
);
};

export default ProfilePhoto;