import { MenuInterface } from '@/interfaces'
import Link from 'next/link'
import React from 'react'
interface Props{
    menu: MenuInterface[]
}
export const MenuCenter = ({menu}: Props) => {
  return (
    <nav className='hidden sm:block'>
        {
            menu.map(nav => (
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' key={nav.label} href={nav.url}>{nav.label}</Link>
            ))
        } 
    </nav>
  )
}
