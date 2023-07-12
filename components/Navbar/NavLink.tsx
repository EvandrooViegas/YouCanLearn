import React from 'react'
import { type Link } from './links'

type Props = {
    link: Link
}

export default function NavLink(props:Props) {
    const { link } = props
  return (
    <li className='md:text-xl text-2xl list-none'>
        <a href={link.href}>{link.name}</a>
    </li>
  )
}
