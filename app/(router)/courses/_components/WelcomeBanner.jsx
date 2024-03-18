import Image from 'next/image';
import React from 'react';

function WelcomeBanner() {
  return (
    <div className='flex gap-5 items-center bg-white rounded-3xl p-8' >
      <Image src="/panda.png" alt='panda' width={100} height={100} />
      <div>
        <h2 className='font-bold text-[27px]'>Welcome to <span className='text-primary'>Danush</span> LMS </h2>
        <h2 className='font-md text-gray-700'>Explore, Learn & Upskill yourself</h2>
      </div>
    </div>
  );
}

export default WelcomeBanner;
