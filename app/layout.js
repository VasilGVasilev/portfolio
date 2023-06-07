'use client'

import './globals.css'

import { Roboto } from 'next/font/google';
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { imageLoader } from './imgLoader'

export default function RootLayout({ children }) {


  return (
    <html className={`${roboto.className}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
