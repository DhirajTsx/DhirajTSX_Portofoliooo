import Navbar from '@/components/layout/navbar/Navbar'
import { Spotlight } from '@/components/ui/spotlight-new'
import React from 'react'

function Hero() {
  return (
    <div className='relative w-full h-screen overflow-hidden bg-black dark:bg-white'>
      <Navbar />
      <Spotlight />
    </div>
  )
}

export default Hero