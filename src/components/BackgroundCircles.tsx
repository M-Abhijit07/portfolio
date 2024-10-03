"use client";
import React from 'react';
import { motion } from 'framer-motion';

function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className='relative flex justify-center items-center'
    >
      <div className='absolute border border-[#D22B2B] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
      <div className='absolute border border-[#210B2C] rounded-full h-[300px] w-[300px] mt-52' />
      <div className='absolute border border-[#55286F] rounded-full h-[500px] w-[500px] mt-52' />
      <div className='absolute border border-[#BC96E6] opacity-20 rounded-full h-[650px] w-[650px] mt-52 animate-pulse' />
      <div className='absolute border border-[#D8B4E2] rounded-full h-[800px] w-[800px] mt-52' />
    </motion.div>
  );
}

export default BackgroundCircles;
