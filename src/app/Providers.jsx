'use client';
import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Providers({children}) {
  return (
    <ParallaxProvider>
        {children}
    </ParallaxProvider>
  )
}
