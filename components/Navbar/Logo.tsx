import React from 'react'
import Image from "next/image"
export default function Logo() {
  return (
      <div className="relative nav-z-index w-24 h-12">
        <Image src="/icon.png" fill className='object-contain' alt='Logo' />
      </div>
      )
}
