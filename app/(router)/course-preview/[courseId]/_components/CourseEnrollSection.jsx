import GlobalApi from '@/app/_utils/GlobalApi';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { toast } from "sonner"; // Assuming "sonner" is the correct package
import React, { useContext, useEffect } from 'react'; // Removed "useContext" import since it's not used
import { useRouter } from 'next/navigation';
import { UserMemberContext } from '@/app/_context/UserMemberContext';

function CourseEnrollSection({ courseInfo, isUserAlreadyEnrolled }) {
  const { user } = useUser();
  const router = useRouter();
// const isMember=false;
  const{isMember,setIsMember}=useContext(UserMemberContext);
  
useEffect(() => console.log("isUserAlreadyEnrolled", isUserAlreadyEnrolled), [isUserAlreadyEnrolled]);


  // Enroll to the Course
  const onEnrollCourse = () => {
    GlobalApi.enrollToCourse(courseInfo?.slug,user?.primaryEmailAddress?.emailAddress)
      .then(resp => {
        console.log(resp);
        if (resp) {
          // Show toast on successful enroll
          toast("User Enrolled Successfully", {
            description: "User Enrolled this course",
          });
          // Redirect to watch course
          router.push('/watch-course/' + resp.createUserEnrollCourse.id);
        }
      });
  };

  return(
    <div className='p-3 text-center rounded-2xl bg-primary flex flex-col gap-3'>
    
    <h2 className='text-[22px] font-bold text-white'> Enroll to the Course</h2>    
   
    {/* Use has Membership & Already Login */}
   
      {user&&(isMember||courseInfo.free)&&!isUserAlreadyEnrolled? 
      <div className='flex flex-col gap-3 mt-3'>
        <h2 className='text-white font-light'>Enroll Now to Start Learning & Upskilling yourself</h2> 
        <Button className='bg-white text-primary hover:bg-white
        hover:text-primary rounded-full'
        onClick={()=>onEnrollCourse()}>
          Enroll Now</Button>
        </div>

        :!user?
        <div className='flex flex-col gap-3 mt-3'>
        <h2 className='text-white font-light'>Enroll Now to Start Learning & Upskilling yourself</h2> 
        <Link href={'/sign-in'}>
        <Button className='bg-white text-primary hover:bg-white
        hover:text-primary rounded-full' >Enroll Now</Button>
        </Link></div>
    
        : !isUserAlreadyEnrolled&&
        <div  className='flex flex-col gap-3 mt-3'>
        <h2 className='text-white font-light'>Buy Monthly Membership & Get Access to All Courses </h2> 
        <Button className='bg-white text-primary hover:bg-white
        hover:text-primary rounded-full'>Buy Membership ₹499</Button>
        </div>
      } 
     {/* Above section - User Does not have membership and Login */}
   
       {isUserAlreadyEnrolled&&
       <div  className='flex flex-col gap-3 mt-3'>
       <h2 className='text-white font-light'>Continue to Learn your course </h2> 
       <Link href={'/watch-course/'+isUserAlreadyEnrolled}>
       <Button className='bg-white text-primary hover:bg-white
       hover:text-primary rounded-full'>Continue</Button></Link>
       </div>
        }

    </div>
  )
}

export default CourseEnrollSection