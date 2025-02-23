import Brands from '@/components/landing-page/Brands'
import Category from '@/components/landing-page/category'
import Contact from '@/components/landing-page/Contact'
import Destinations from '@/components/landing-page/Destinations'
import Header from '@/components/landing-page/Header'
import HeroSection from '@/components/landing-page/HeroSection'
import Process from '@/components/landing-page/Process'
import { imageConstants } from '@/constants/image.constants'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='relative max-w-[1535px] mx-auto pb-96'>
      <Image src={imageConstants.heroOverlay} alt='hero-overlay' className='absolute right-0 -z-10 ' />
      <div className='max-w-[1160.58px] mx-auto px-4 '>
        <Header />
        <HeroSection />
        <Category/>
        <Destinations/>
        <Process/>
        <Brands/>
        <Contact/>
      </div>
    </div>
  )
}

export default page
