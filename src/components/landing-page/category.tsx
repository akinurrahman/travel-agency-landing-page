"use client"

import { categoryItems } from '@/constants'
import { imageConstants } from '@/constants/image.constants'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'motion/react'
import React from 'react'

interface ItemProps {
    image: StaticImageData,
    title: string,
    description: string
}

const CategoryItemCard = ({ item }: { item: ItemProps }) => {
    return (
        <motion.div
            className='flex flex-col items-center bg-white shadow-lg rounded-lg p-4 lg:p-6 transition-all hover:scale-[1.05]'
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
        >
            <Image
                src={item.image}
                alt='category-icon'
                width={92}
                height={78}
                className='w-[60px] lg:w-[92px] lg:h-[78px] object-cover'
            />
            <div className="text-center mt-3">
                <h3 className='text-primary font-semibold font-openSans text-lg lg:text-xl'>{item.title}</h3>
                <p className='text-muted text-xs lg:text-sm mt-1'>{item.description}</p>
            </div>
        </motion.div>
    )
}

const Category = () => {
    return (
        <motion.section
            className='mt-[100px] flex flex-col items-center relative  px-4 lg:px-10  '
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
        >
            <Image
                src={imageConstants.categoryOverlay}
                alt='category-overlay'
                width={390}
                height={390}
                className='hidden lg:block absolute -top-10 -right-10 lg:w-[153px] lg:h-[166px] opacity-60'
            />

            <motion.h2
                className='text-muted text-xs font-semibold lg:text-lg uppercase tracking-wider'
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                Category
            </motion.h2>

            <motion.h2
                className='text-primary font-bold font-volkhov text-xl lg:text-[50px] lg:mt-3 text-center leading-tight'
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                We Offer Best Services
            </motion.h2>

            <motion.div
                className='grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 mt-10 lg:mt-[66px]'
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                {
                    categoryItems.map((item) => (
                        <CategoryItemCard key={item.title} item={item} />
                    ))
                }
            </motion.div>
        </motion.section>
    )
}

export default Category
