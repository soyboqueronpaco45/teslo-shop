import React from 'react'
import { Logo } from '../logo/Logo'
import { initialMenu } from '@/seed/seed'
import { MenuCenter, MenuEnd } from '..'
const menu = initialMenu.menu

 export const TopMenu = () => {
  return (
    <nav className='flex px-5 justify-between items-center w-full'>
      <Logo labelLogo='Teslo' labelSpan=' | Shop' />
      <MenuCenter menu={menu}/>
      <MenuEnd />
    </nav>
  )
}


