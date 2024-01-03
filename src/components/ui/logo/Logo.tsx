import { titleFont } from '@/config/fonts'
import Link from 'next/link'
import React from 'react'
interface Props {
    labelLogo: string
    labelSpan: string
}
export const Logo = ({labelLogo, labelSpan}: Props) => {
  return (
    <div>
        <Link
         href="/"
        >
            <span  className={`${titleFont.className} antialiased font-bold`}>{labelLogo}</span>
            <span>{labelSpan}</span>
        </Link>
    </div>
  )
}
