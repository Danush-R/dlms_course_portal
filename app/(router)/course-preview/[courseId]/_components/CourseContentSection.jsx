import { Lock, Play } from 'lucide-react'
import React, { useState } from 'react'

function CourseContentSection({courseInfo,isUserAlreadyEnrolled,
  watchMode=false,setActiveChapterIndex,completedChapter}) {
    const [activeIndex,setActiveIndex]=useState(0);

    /** Use to check the chapter is completed or not */
    const checkIsChapterCompleted=(chapterId)=>{
        return completedChapter.find(item=>item.chapterId==chapterId)
    }
  return (
    <div className='p-3 bg-white rounded-3xl'>
    <h2>Contents</h2>
    {courseInfo.chapter.map((item, index) => (
        <div key={index}>
            <h2 className={`p-2 text-[14px] 
                flex justify-between items-center
                m-2 
                border rounded-full px-4 cursor-pointer
                ${activeIndex ==index && 'bg-primary text-white'}
                ${isUserAlreadyEnrolled && 'hover:bg-primary hover:text-white'}
                ${watchMode&&checkIsChapterCompleted(item.id)&&'border-green-800 bg-green-400'}
                `}
                onClick={() => {
                    watchMode&&setActiveChapterIndex(index);
                    watchMode&&setActiveIndex(index);
                }}
            >
                {index + 1}. {item.name}
                {(activeIndex === index || isUserAlreadyEnrolled) ?
                    <Play className='h-4 w-4'/> :
                    <Lock className='h-4 w-4'/>}
            </h2>
        </div>
    ))}
</div>

  )
}

export default CourseContentSection