import CourseList from '@/components/Course/course-list'
import Section from '@/components/Section'
import React from 'react'
import data from '@/data'
export const revalidate = 0

export default async function Courses() {
  
  return (
    <Section 
     className='bg-gradient-to-b from-zinc-700 to-zinc-900' 
     title='Cursos 🎓' 
     id="courses"
    >
      <CourseList courses={data.courses} />
    </Section>
  )
}
 