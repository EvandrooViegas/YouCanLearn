import { ICourse } from '@/types/ICourse'
import React from 'react'
import Course from '.'

type Props = {
  courses: ICourse[] | null
}
export default function CourseList(props:Props) {
  const { courses } = props
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {courses?.map((course, idx) => <Course key={idx} course={course} />)}
    </div>
  )
}
