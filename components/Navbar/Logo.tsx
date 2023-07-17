import React from 'react'
import Image from "next/image"
import Link from 'next/link'
export default function Logo() {
  return (
      <Link href="/" className="relative nav-z-index md:w-[160px] w-[100px] md:h-[40px] h-[35px]">
        <Image src="/icon-black.svg" fill className='object-contain object-left' alt='Logo' />
      </Link>
      )
}
