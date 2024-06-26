import React from 'react'
import ProgressCourseItem from './ProgressCourseItem'

function InProgressCourseList({userEnrolledCourses}) {
  return (
    <div className='p-5 bg-white mt-3 rounded-3xl'>
        <h2 className='text-primary text-[18px] font-semibold'>Recent Enrolled Courses</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-3 gap-5'>
            {userEnrolledCourses.length>0?userEnrolledCourses.map((item,index)=>(
                <ProgressCourseItem key={index}
                course={item}
                />
            ))
            :
            [1,2,3,4,5].map((item,index)=>(
              <div className='h-[200px] w-[230px] bg-slate-200 animate-pulse'></div>
            ))
          }
        </div>
    </div>
  )
}

export default InProgressCourseList