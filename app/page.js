"use client"
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import { useEffect } from 'react';
import GlobalApi from './_utils/GlobalApi'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router=useRouter();
  const {user,isLoaded}=useUser();
  useEffect(()=>{
   
    if(user)
    {
      router.push('/dashboard')
    }
    else{
      isLoaded&&router.push('/courses')
    }
  },[user]);

  
  return (
   <div>
    <UserButton afterSignOutUrl="/sign-in"/>
   </div>
  )
}
