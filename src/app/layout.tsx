import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { fontBody } from '@/config/fonts'

import './globals.css'

export const metadata: Metadata = {
  title: 'Teslo | Shop',
  description: 'Una tienda virtual de productos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontBody.className}>{children}</body>
    </html>
  )
}
