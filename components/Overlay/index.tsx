import React from 'react'

type Props = {
    children: React.ReactNode;
    showOverlayBg: boolean
} & React.HTMLAttributes<HTMLDivElement>
export default function Overlay(props:Props) {
  const { children, className, showOverlayBg = true, ...rest } = props
    return (
    <div className={`${showOverlayBg ? `bg-black/10` : 'bg-transparent'} w-full h-full ${className}`} {...rest}>
        {children}
    </div>

  )
}
