import Image from 'next/image';
import React from 'react';

function CourseItem({ course }) {
  return (
    <div className='border rounded-xl
    hover:shadow-lg hover:shadow-blue-600 cursor-pointer'>
      {course?.banner?.url && (
        <div>
          <Image
            src={course.banner.url}
            width={500}
            height={150}
            alt='banner'
            className='rounded-t-xl'
          />
        </div>
      )}
      <div className='flex flex-col gap-1 p-2'>
        <h2 className='font-semibold'>{course.name}</h2>
        <h2 className='font-semibold text-[13px] text-gray-500'>{course.author}</h2>
        {course.free ? (
          <div className='flex gap-2'>
            <img src="/youtube.png" alt="youtube" width={20} height={20} />
            <h2 className='text-[12px] font-bold text-gray-500'>Watch on Youtube</h2>
          </div>
        ) : (
          <div className='flex gap-2'>
            <img src="/chapter.png" alt="chapter" width={20} height={20} />
            <h2 className='text-[12px] font-bold text-gray-500'>Chapters</h2>
          </div>
        )}

        <h2 className='text-[14px]'>{course.free ? 'Free' : 'Paid'}</h2>
      </div>
    </div>
  );
}

export default CourseItem;
