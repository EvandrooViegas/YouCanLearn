import React from 'react'
import QuestionToggler from '.'
import { IQuestion } from '@/types/IQuestion'

type Props = {
  questions: IQuestion[] | null
}
export default function QuestionList(props:Props) {
  const { questions } = props
  return (
    <div className='flex w-full  flex-col gap-3'>
      {questions?.map((question, idx) => <QuestionToggler key={idx} question={question} />)}
    </div>
  )
}
