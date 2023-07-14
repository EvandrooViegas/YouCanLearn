import React from 'react'
import { type Link } from './links'

type Props = {
    link: Link
}

export default function NavLink(props:Props) {
    const { link } = props
  return (
    <li className='hover:underline list-none text-neutral-900  font-bold text-sm'>
        <a href={link.href}>{link.name}</a>
    </li>
  )
}
