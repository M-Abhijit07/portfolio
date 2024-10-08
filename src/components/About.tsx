"use client";
import { motion } from 'framer-motion'
import React from 'react'
import { PageInfo } from '../../typings'
import { urlFor } from '../../sanity'

type Props = {
    pageInfo: PageInfo
}

export default function About({pageInfo}: Props) {
  return (
    <motion.div
        initial={{
            opacity: 0
        }}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">

        <h3 className='absolute top-24 uppercase tracking-[20px] text-white text-2xl'>About</h3>

        <motion.img
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            src={urlFor(pageInfo?.profilePic).url()}
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:h-[600px] xl:w-[500px]"
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a {" "}
                <span className='underline decoration-[#D22B2B]/50 text-white'>little</span>{" "}
                Background
            </h4>
            <p className='text-base text-white'>
                {pageInfo?.backgroundInformation}
            </p>
        </div>
    </motion.div>
  )
}
