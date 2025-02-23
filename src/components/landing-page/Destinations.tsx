"use client"
import React from 'react'
import { motion } from 'motion/react'
import Image, { StaticImageData } from 'next/image'
import { destinations } from '@/constants'
import { imageConstants } from '@/constants/image.constants'

interface DestinationProps {
    image : StaticImageData,
    name : string,
    cost : string,
    trip : string
}


const DestinationCard = ({ item }: { item: DestinationProps }) => {
    return (
        <div className='rounded-xl relative shadow-lg'>
            <Image src={item.image} alt={item.name} width={300} height={300} className='rounded-xl' />
           <div className='bg-white w-full absolute -bottom-0
            rounded-b-xl px-4 py-6'>
                <div className='flex justify-between text-muted font-medium text-lg'>
                    <h2>{item.name}</h2>
                    <p>{item.cost}</p>
                </div>
                <div className='flex items-center gap-2 mt-2'>
                    <Image src={imageConstants.cursor} alt='cursor' width={20} height={20} />
                    <span className='text-muted font-medium '>{item.trip}</span>
                </div>
            </div>
        </div>
    )
}
const Destinations = () => {
  return (
      <motion.section
          className='mt-[100px] flex flex-col items-center relative  px-4 lg:px-10  '
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
      >
          <motion.h2
              className='text-muted text-xs font-semibold lg:text-lg uppercase tracking-wider'
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
          >
              Top Selling
          </motion.h2>

          <motion.h2
              className='text-primary font-bold font-volkhov text-xl lg:text-[50px] lg:mt-3 text-center leading-tight'
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: false, amount: 0.3 }}
          >
              Top Destinations
          </motion.h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-10'>
            {destinations.map((item, index) => (
                <DestinationCard key={index} item={item} />
            ))}
          </div>
      </motion.section>
  )
}

export default Destinations
