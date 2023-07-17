import React from 'react'
import { IconType } from 'react-icons/lib'
type Props = {
    icon: IconType,
    title: string,
    description?: string
}
export default function Info(props:Props) {
  const { icon: Icon, title, description } = props
  return (
    <div className='flex flex-col gap-3 items-center p-4 border border-dashed border-zinc-300 '>
        <Icon className="text-primary" />
        <span className='text-sm text-neutral-800 '>{title}</span>
        <p className='text-sm text-neutral-600'>{description}</p>
    </div>
  )
}
