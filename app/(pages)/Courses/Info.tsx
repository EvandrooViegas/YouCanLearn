import React from 'react'
import { IconType } from 'react-icons/lib'
type Props = {
    icon: IconType,
    title: string,
    subtitle?: string
    description?: string
}
export default function Info(props:Props) {
  const { icon: Icon, title, subtitle, description } = props
  return (
    <div className='flex flex-col gap-3 items-center p-4 border border-dashed border-zinc-300 '>
        <Icon className="text-primary" />
     <div className='space-y-0.5 text-center'>
     <span className='text-sm text-neutral-800 '>{title}</span>
        <p className='text-sm text-neutral-600'>{subtitle}</p>
        <p className='text-sm text-neutral-600'>{description}</p>
     </div>
    </div>
  )
}
