import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseItem from './CourseItem';
import Link from 'next/link';

function CourseList() {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, []);

  // Fetch course list
  const getAllCourses = () => {
    GlobalApi.getAllCourseList().then(resp => {
      setCourseList(resp?.courseLists);
    });
  };

  return (
    <div className='p-5 bg-white rounded-2xl mt-5'>
      {/* Title and Filter */}
      <div className='flex items-center justify-between'>
        <h2 className='text-[20px] font-bold text-primary'>All Courses</h2>
        <Select>
          <SelectTrigger className="w-[180px] rounded-2xl">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent className='rounded-3xl'>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Free">Free</SelectItem>
            <SelectItem value="Paid">Paid</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Display Course List */}
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
        {courseList?.length > 0 ? (
          courseList.map((item, index) => (
            <Link href={'/course-preview/' +item.slug} key={index}>
              <div>
                <CourseItem course={item} />
              </div>
            </Link>
          ))
        ) : (
          [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <div key={index} className='w-full h-[240px] rounded-xl m-2 bg-slate-200 animate-pulse'></div>
          ))
        )}
      </div>
    </div>
  );
}

export default CourseList;
