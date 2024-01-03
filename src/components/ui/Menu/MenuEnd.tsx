import Link from 'next/link'
import React from 'react'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'
export const MenuEnd = () => {
  return (
    <nav className='flex items-center'>
        <Link href='/search'><IoSearchOutline className='w-5 h-5'/></Link>
        <Link href='/cart'>
            <div className='relative'>
                <span className='absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white'>3</span>
                <IoCartOutline className='w-5 h-5' />

            </div> 
        </Link>
        <button className='m-2 p2 rounded-md transition-all hover:bg-blue-100'>Menú</button>
    </nav>
  )
}
