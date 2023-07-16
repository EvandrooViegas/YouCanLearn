import React from 'react'
import Image from "next/image"
import Link from 'next/link'
export default function Logo() {
  return (
      <Link href="/" className="relative nav-z-index md:w-[200px] w-[100px] md:h-[70px] h-[35px]">
        <Image src="/icon.png" fill className='object-contain object-left' alt='Logo' />
      </Link>
      )
}
