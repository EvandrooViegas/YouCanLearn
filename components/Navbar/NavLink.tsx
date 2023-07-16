"use client"

import React from 'react'
import { type Link } from './links'
import { useNavbarContext } from './context'

type Props = {
    link: Link
}

export default function NavLink(props:Props) {
    const { link } = props
    const { onNavbarLinkClick } = useNavbarContext()
  return (
    <li 
      className='hover:text-primary list-none text-zinc-900 text-sm' 
      onClick={onNavbarLinkClick}
    >
        <a href={link.href}>{link.name}</a>
    </li>
  )
}
