"use client";
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '../../typings';

type Props = {
    socials: Social[];
}

export default function Header({socials}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}

            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            
            transition={{
                duration: 1.5,
            }}

            className='flex flex-row items-center'>
            {/* Social Icons */}
            {socials.map((socials) => (
                <SocialIcon key={socials._id} url={socials.url} fgColor='white' bgColor='transparent' className='transition-transform hover:scale-150 duration-300' />
            ))}
        </motion.div>
        <Link href="#contact">
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{ duration: 1.5 }}
                className='flex flex-row items-center text-white cursor-pointer'>
                <SocialIcon className='cursor-pointer' network='email' fgColor='white' bgColor='transparent' />
                <p className='uppercase hidden md:inline-flex text-sm text-white'>Get in Touch!</p>
            </motion.div>
        </Link>
        <style jsx>{`
        .social-icon:hover {
          color: #D22B2B; /* Red color from the palette on hover */
        }
      `}</style>
    </header>
  )
}
