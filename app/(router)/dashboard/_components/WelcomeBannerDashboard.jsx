import Image from 'next/image'
import React from 'react'

function WelcomeBannerDashboard({user}) {
  return (
    <div className='bg-blue-200 rounded-3xl p-5 flex gap-5 items-center'>
        <Image src={'/panda.png'} alt='panda'
        width={150}
        height={150}/>
        <div>
            <h2 className='text-[24px] font-light'>Welcome Back,  
            <span className='font-bold text-primary'> {user?.fullName}</span></h2>
            <h2 className='text-[16px] font-light text-gray-800'>Lets Begin Learning where you left off, <br></br>
            Keep it up and improve your progress</h2>
        </div>
    </div>
  )
}

export default WelcomeBannerDashboard