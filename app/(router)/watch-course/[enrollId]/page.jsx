"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import CourseVideoDescription from '../../course-preview/[courseId]/_components/CourseVideoDescription';
import CourseContentSection from '../../course-preview/[courseId]/_components/CourseContentSection';
import { toast } from 'sonner';


function WatchCourse({params}) {
  
  const{user}=useUser();
  const[courseInfo,setCourseInfo]=useState([]);
  const[activeChapterIndex,setActiveChapterIndex]=useState(0);
  const[completedChapter,setCompletedChapter]=useState([]);

  useEffect(()=>{
    console.log("HERE")
     },[])

  useEffect(()=>{
    console.log("HERE")
    params&&user&&getUserEnrolledCourseDetail();
  },[params,user])

  /* Get usr enrolled details by id+email */
  const getUserEnrolledCourseDetail=()=>{
    GlobalApi.getUserEnrolledCourseDetails(params.enrollId,
      user.primaryEmailAddress.emailAddress)
      .then(resp=>{
        setCompletedChapter(resp.userEnrollCourses[0].completedChapter);
        setCourseInfo(resp.userEnrollCourses[0].courseList);
      })
  }
// Save completed chapterID
const onChapterComplete=(chapterId)=>{
  GlobalApi.markChapterCompleted(params.enrollId,chapterId)
  .then(resp=>{
    console.log(resp);
    if(resp)
    {
      toast('Chapter Marked as Completed!')
      getUserEnrolledCourseDetail();
    }
  })
}

  return courseInfo.name&&(
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3 '>
          {/* Video, Description */}
          
          <div className='col-span-2 bg-white p-3 rounded-xl'>
          <CourseVideoDescription courseInfo={courseInfo}
          watchMode={true}
          activeChapterIndex={activeChapterIndex}
          setChapterCompleted={(chapterId)=>onChapterComplete(chapterId)}
          />
          </div>
  
          {/* Course Content */}
          <div>
          <CourseContentSection courseInfo={courseInfo}
          isUserAlreadyEnrolled={true}
          watchMode={true}
          completedChapter={completedChapter}
          setActiveChapterIndex={(index)=>setActiveChapterIndex(index)}
          />
          </div>
      </div>
    </div>
  )
}


export default WatchCourse