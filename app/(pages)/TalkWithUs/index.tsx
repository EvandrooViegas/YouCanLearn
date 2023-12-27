import Section from '@/components/Section'
import React from 'react'

export default function TalkWithUs() {
  return (
    <Section
    id='talkwithus'
    backgroundClassName='bg bg-0'
    className='relative p-24 flex flex-col justify-center items-center'
    >
        <div className="absolute inset-0 bg-black/60" />
        <div className='relative flex flex-col justify-center  items-center gap-1 text-neutral-200 text-prima'>
            <h6>Fale Connosco</h6>
            <span>+244 961 454 545</span>
        </div>
    </Section>
  )
}
