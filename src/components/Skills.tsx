"use client";
import React from 'react'
import { motion } from 'framer-motion';
import Skill from './Skill';
import { Skill as Sk } from '../../typings';

type Props = {
  skills: Sk[]
}

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center bg-[#210B2C]'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-white text-2xl'>Skills</h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-300 text-sm'>Hover over for skill proficiency</h3>

      <div className='grid grid-cols-4 gap-5'>
        {skills?.slice(0, (skills.length % 2 === 0) ? skills.length / 2 : (skills.length / 2) + 1).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills?.slice((skills.length % 2 === 0) ? skills.length / 2 : (skills.length / 2) + 1, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills;
