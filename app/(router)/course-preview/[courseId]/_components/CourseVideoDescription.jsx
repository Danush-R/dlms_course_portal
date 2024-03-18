import React from 'react'
import VideoPlayer from './VideoPlayer'
import Markdown from 'react-markdown'
import { Button } from '@/components/ui/button'

function CourseVideoDescription({courseInfo,activeChapterIndex,
  watchMode=false,setChapterCompleted}) {
  return (
    <div>
      <h2 className='text-[20px] font-semibold'>{courseInfo.name}</h2>
        <h2 className='text-gray-600 text-[14px] mb-3'>{courseInfo.author}</h2>
    {/* Video Player  */}
    <VideoPlayer videoUrl={courseInfo?.chapter[activeChapterIndex]?.video?.url}
    poster={!watchMode?courseInfo?.banner?.url:null}/>
    
    {/* {Description} */}
    <h2 className='mt-5 text-[17px] font-semibold'>
      {watchMode?
      <span className=' flex justify-between items-center rounded-3xl'> {courseInfo?.chapter[activeChapterIndex]?.name}
     <Button onClick={() => setChapterCompleted(courseInfo?.chapter[activeChapterIndex]?.id)} className='rounded-full'>
        Mark as Completed</Button>
      </span>
      :<span>About This Course</span>
      }
      </h2>
      
      {watchMode?
      <Markdown className='text-[14px] font-normal mt-2 leading-7'>
      {courseInfo?.chapter[activeChapterIndex]?.shortDesc}
      </Markdown>
      :
      <Markdown className='text-[14px] font-normal mt-2 leading-7'>
      {courseInfo.description}
      </Markdown>
      }
      
    </div>
  )
}

export default CourseVideoDescription