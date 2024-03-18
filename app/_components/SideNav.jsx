"use client"
import React, { useEffect } from 'react';
import { BadgeIcon, BookOpen, GraduationCap, LayoutGrid, MailIcon, StoreIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

function SideNav() {
  
  useEffect(()=>{
    console.log(path,"path")
  },[])
  const {user}=useUser();
  const path=usePathname();
  
  const menu = [
    {
      id: 6,
      name: "Dashboard",
      icon:LayoutGrid, // Make sure LayoutDashboard is defined
      path:'/dashboard',
      auth:user
    
    },
    {
      id: 1,
      name: "All Courses",
      icon: BookOpen, // Make sure BookOpen is defined
      path:'/courses',
      auth:true
     },
    
    {
      id: 2,
      name: "DLMS Pro",
      icon: BadgeIcon, // Make sure BadgeIcon is defined
      path:'/dlmspro',
      auth:true
     
    },
    {
      id: 5,
      name: "NewsLetter",
      icon: MailIcon, // Make sure MailIcon is defined
      path:'/newsletter',
      auth:true
     
    },
    {
      id: 3,
      name: "Instructor",
      icon: GraduationCap, // Make sure GraduationCap is defined
      path:'/instructor',
      auth:true
     
      
    },
    {
      id: 4,
      name: "Store",
      icon: StoreIcon, // Make sure StoreIcon is defined
      path:'/store',
      auth:true
    }
  ];

  return (
    <div className='p-5 bg-white shadow-sm border h-screen rounded-md' >
      
      <Image src='/logo.svg' alt='logo' width={80} height={80}/>

      <hr className='mt-7'></hr>
      
      {/* Menu List */}
      
      <div className= 'mt-5'>
      
        {menu.map((item, index) => item.auth&& (
        <Link href={item.path} key={item.id}>
          <div className={`group flex gap-3 mt-2 p-3 text-[18px] items-center text-gray-500 cursor-pointer
           hover:bg-primary hover:text-white rounded-full transition-all ease-in-out duration-200 
           ${path.includes(item.path) && 'bg-primary text-white'}`}>
            <item.icon className='group-hover:animate-bounce' />
            <h2>{item.name}</h2>
          </div>
        </Link>
      ))}

      </div>
    </div>
  );
}

export default SideNav;
